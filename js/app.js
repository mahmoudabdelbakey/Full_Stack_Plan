// Main Application Controller & Router
const storage = (typeof window !== "undefined" && window.storageService)
  ? window.storageService
  : (typeof storageService !== "undefined" ? storageService : null);

class AppState {
  constructor() {
    this.data = storage ? storage.load() : (window.initialRoadmapData || {});
    this.currentRoute = "dashboard";
    this.editMode = false;
    this.searchQuery = "";
    this.activeTopic = null;
    this.activePhaseId = null;
    this.interviewPage = 1;
    this.interviewPageSize = 10;
  }

  save() {
    if (storage) storage.save(this.data);
  }

  // Calculate high-level progress statistics
  getMetrics() {
    let totalTopics = 0;
    let completedTopics = 0;
    let inProgressTopics = 0;

    if (this.data.phases && Array.isArray(this.data.phases)) {
      this.data.phases.forEach(phase => {
        if (phase.topics && Array.isArray(phase.topics)) {
          totalTopics += phase.topics.length;
          phase.topics.forEach(t => {
            if (t.status === "completed") completedTopics++;
            else if (t.status === "in-progress") inProgressTopics++;
          });
        }
      });
    }

    const totalPhases = (this.data.phases && Array.isArray(this.data.phases)) ? this.data.phases.length : 0;
    const completedPhases = (this.data.phases && Array.isArray(this.data.phases)) ? this.data.phases.filter(p => {
      if (!p.topics || p.topics.length === 0) return false;
      return p.topics.every(t => t.status === "completed");
    }).length : 0;

    const totalProjects = (this.data.projects && Array.isArray(this.data.projects)) ? this.data.projects.length : 0;
    const completedProjects = (this.data.projects && Array.isArray(this.data.projects)) ? this.data.projects.filter(p => p.status === "completed").length : 0;

    const overallProgress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

    let totalChecklistItems = 0;
    let completedChecklistItems = 0;
    if (this.data.jobReadinessChecklist && Array.isArray(this.data.jobReadinessChecklist)) {
      this.data.jobReadinessChecklist.forEach(cat => {
        if (cat.items && Array.isArray(cat.items)) {
          cat.items.forEach(item => {
            totalChecklistItems++;
            if (item.completed) completedChecklistItems++;
          });
        }
      });
    }
    const readinessProgress = totalChecklistItems > 0 ? Math.round((completedChecklistItems / totalChecklistItems) * 100) : 0;

    return {
      totalTopics,
      completedTopics,
      inProgressTopics,
      remainingTopics: totalTopics - (completedTopics + inProgressTopics),
      totalPhases,
      completedPhases,
      totalProjects,
      completedProjects,
      overallProgress,
      readinessProgress
    };
  }

  // Determine smart next step based on prerequisites
  getSmartNextStep() {
    if (!this.data.phases) return null;
    for (const phase of this.data.phases) {
      if (!phase.topics) continue;
      const incompleteTopic = phase.topics.find(t => t.status !== "completed");
      if (incompleteTopic) {
        return {
          phaseTitle: phase.title,
          phaseNumber: phase.number,
          topic: incompleteTopic
        };
      }
    }
    return null;
  }
}

const state = new AppState();

// Helper: Show toast notification
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 160);
  }, 3200);
}

// Router & View Renderer
function navigateTo(route) {
  state.currentRoute = route;
  window.location.hash = route;

  document.querySelectorAll(".nav-item").forEach(el => {
    if (el.getAttribute("data-route") === route) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });

  renderActiveView();

  const sidebar = document.getElementById("sidebar");
  if (sidebar && sidebar.classList.contains("mobile-open")) {
    sidebar.classList.remove("mobile-open");
  }
}

function renderActiveView() {
  const container = document.getElementById("mainContainer");
  if (!container) return;

  const navPhaseCount = document.getElementById("navPhaseCount");
  if (navPhaseCount && state.data.phases) navPhaseCount.textContent = state.data.phases.length;

  const navProjectCount = document.getElementById("navProjectCount");
  if (navProjectCount && state.data.projects) navProjectCount.textContent = state.data.projects.length;

  switch (state.currentRoute) {
    case "dashboard":
      renderDashboard(container);
      break;
    case "roadmap":
      renderRoadmap(container);
      break;
    case "projects":
      renderProjects(container);
      break;
    case "skills":
      renderSkills(container);
      break;
    case "technologies":
      renderTechnologies(container);
      break;
    case "reviews":
      renderReviews(container);
      break;
    case "study-plan":
      renderStudyPlan(container);
      break;
    case "interview":
      renderInterviewQuestions(container);
      break;
    case "readiness":
      renderJobReadiness(container);
      break;
    case "notes-resources":
      renderNotesAndResources(container);
      break;
    case "archive":
      renderArchive(container);
      break;
    case "settings":
      renderSettings(container);
      break;
    default:
      renderDashboard(container);
  }
}

/* ==========================================================================
   VIEW 1: Dashboard
   ========================================================================== */
function renderDashboard(container) {
  const m = state.getMetrics();
  const nextStep = state.getSmartNextStep();

  container.innerHTML = `
    <header class="page-header">
      <h1 class="page-title">Personal Learning Dashboard</h1>
      <p class="page-description">Welcome! Your personal learning management platform to become a job-ready Junior Full Stack .NET Developer.</p>
    </header>

    ${nextStep ? `
      <section class="recommendation-banner" aria-label="Recommended next step">
        <div class="recommendation-content">
          <span class="recommendation-tag">Recommended Next Topic</span>
          <h2 class="recommendation-title">Phase ${nextStep.phaseNumber}: ${nextStep.phaseTitle} &bull; ${escapeHtml(nextStep.topic.title)}</h2>
          <p class="recommendation-desc">${escapeHtml(nextStep.topic.whatIsIt || "Begin your foundational study.")}</p>
        </div>
        <button class="btn-primary" id="continueLearningBtn" data-phase="${nextStep.phaseNumber}" data-topic="${nextStep.topic.id}">
          Start Topic
        </button>
      </section>
    ` : ""}

    <!-- Core Metrics -->
    <section class="metrics-grid" aria-label="Key learning metrics">
      <article class="metric-card">
        <span class="metric-label">Overall Progress</span>
        <div class="metric-value">${m.overallProgress}%</div>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${m.overallProgress}%;"></div>
        </div>
        <span class="metric-subtext">${m.completedTopics} of ${m.totalTopics} topics completed</span>
      </article>

      <article class="metric-card">
        <span class="metric-label">Phases Completed</span>
        <div class="metric-value">${m.completedPhases} <span style="font-size: 1rem; color: var(--text-tertiary);">/ ${m.totalPhases}</span></div>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${m.totalPhases > 0 ? (m.completedPhases / m.totalPhases) * 100 : 0}%;"></div>
        </div>
        <span class="metric-subtext">${m.totalPhases - m.completedPhases} remaining phases</span>
      </article>

      <article class="metric-card">
        <span class="metric-label">Practical Projects</span>
        <div class="metric-value">${m.completedProjects} <span style="font-size: 1rem; color: var(--text-tertiary);">/ ${m.totalProjects}</span></div>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${m.totalProjects > 0 ? (m.completedProjects / m.totalProjects) * 100 : 0}%;"></div>
        </div>
        <span class="metric-subtext">5 Suggested Real-world Projects</span>
      </article>

      <article class="metric-card">
        <span class="metric-label">Junior Readiness Score</span>
        <div class="metric-value">${m.readinessProgress}%</div>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${m.readinessProgress}%;"></div>
        </div>
        <span class="metric-subtext">Based on 30 core abilities</span>
      </article>
    </section>

    <!-- Interactive Dependency Graph -->
    <section class="graph-container" aria-label="Learning dependency path">
      <h2 class="section-title" style="margin-bottom: 8px;">Core Architecture Learning Path</h2>
      <p style="font-size: 0.8125rem; color: var(--text-secondary); margin-bottom: 16px;">
        Linear dependency chain illustrating how foundational skills stack into the final Full Stack Capstone project.
      </p>
      <div class="graph-flow">
        <div class="graph-node current" data-nav="roadmap" data-phase="0">1. C# Basics</div>
        <span class="graph-arrow">&rarr;</span>
        <div class="graph-node" data-nav="roadmap" data-phase="2">2. OOP & SOLID</div>
        <span class="graph-arrow">&rarr;</span>
        <div class="graph-node" data-nav="roadmap" data-phase="4">3. SQL Server</div>
        <span class="graph-arrow">&rarr;</span>
        <div class="graph-node" data-nav="roadmap" data-phase="6">4. LINQ</div>
        <span class="graph-arrow">&rarr;</span>
        <div class="graph-node" data-nav="roadmap" data-phase="7">5. EF Core</div>
        <span class="graph-arrow">&rarr;</span>
        <div class="graph-node" data-nav="roadmap" data-phase="10">6. Web API</div>
        <span class="graph-arrow">&rarr;</span>
        <div class="graph-node" data-nav="roadmap" data-phase="12">7. Auth & JWT</div>
        <span class="graph-arrow">&rarr;</span>
        <div class="graph-node" data-nav="roadmap" data-phase="19">8. Angular</div>
        <span class="graph-arrow">&rarr;</span>
        <div class="graph-node" data-nav="roadmap" data-phase="20">9. Full Stack Integration</div>
        <span class="graph-arrow">&rarr;</span>
        <div class="graph-node" data-nav="projects" data-proj="project-5">10. Capstone</div>
      </div>
    </section>

    <!-- Study Goals and Activity -->
    <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
      <article class="metric-card">
        <h2 class="section-title">Current Study Focus</h2>
        <p style="font-size: 0.875rem; color: var(--text-primary); margin-bottom: 12px; line-height: 1.5;">
          ${escapeHtml(state.data.studyPlan ? state.data.studyPlan.currentGoal : "Phase 0: Programming Foundation")}
        </p>
        <div style="font-size: 0.8125rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 6px;">
          <div><strong>Weekly Target:</strong> ${state.data.studyPlan ? state.data.studyPlan.weeklyTargetHours : 18} hours</div>
          <div><strong>Daily Target:</strong> ${state.data.studyPlan ? state.data.studyPlan.dailyTargetHours : 2.5} hours</div>
          <div><strong>Active Streak:</strong> ${state.data.studyPlan ? state.data.studyPlan.streakDays : 0} study days</div>
        </div>
      </article>

      <article class="metric-card">
        <h2 class="section-title">Study Activity History</h2>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${(state.data.studyPlan && state.data.studyPlan.studyLogs && state.data.studyPlan.studyLogs.length > 0) ? state.data.studyPlan.studyLogs.slice(-3).reverse().map(log => `
            <div style="padding: 8px 10px; background-color: var(--bg-surface-secondary); border-radius: var(--radius-sm); font-size: 0.8125rem;">
              <div style="display: flex; justify-content: space-between; font-weight: 500; margin-bottom: 2px;">
                <span>${escapeHtml(log.summary)}</span>
                <span style="color: var(--accent);">${log.hours}h</span>
              </div>
              <span style="font-size: 0.6875rem; color: var(--text-tertiary);">${escapeHtml(log.date)}</span>
            </div>
          `).join("") : `
            <div style="font-size: 0.8125rem; color: var(--text-tertiary); padding: 12px 0;">No study sessions logged yet. Use the Study Plan page to log your sessions!</div>
          `}
        </div>
      </article>
    </section>
  `;

  const continueBtn = container.querySelector("#continueLearningBtn");
  if (continueBtn && nextStep) {
    continueBtn.addEventListener("click", () => {
      openTopicModal(nextStep.phaseNumber, nextStep.topic.id);
    });
  }

  container.querySelectorAll(".graph-node").forEach(node => {
    node.addEventListener("click", () => {
      const targetNav = node.getAttribute("data-nav");
      navigateTo(targetNav);
    });
  });
}

/* ==========================================================================
   VIEW 2: Roadmap & Phases
   ========================================================================== */
function renderRoadmap(container) {
  container.innerHTML = `
    <header class="page-header" style="flex-direction: row; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
      <div>
        <h1 class="page-title">Curriculum Roadmap (Phases 0 to 23)</h1>
        <p class="page-description">Complete curriculum from beginner foundations to full stack integration. Everything is editable in Edit Mode.</p>
      </div>
      <button class="btn-primary" id="addNewPhaseBtn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          + Add New Phase
        </button>
    </header>

    <div class="phase-list" id="phaseListContainer">
      ${state.data.phases.map(phase => renderPhaseCard(phase)).join("")}
    </div>
  `;

  container.querySelectorAll(".phase-card-header").forEach(header => {
    header.addEventListener("click", (e) => {
      if (e.target.closest("button") || e.target.closest("select")) return;
      const card = header.closest(".phase-card");
      card.classList.toggle("expanded");
    });
  });

  container.querySelectorAll(".view-topic-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const phaseNum = parseInt(btn.getAttribute("data-phase"));
      const topicId = btn.getAttribute("data-topic");
      openTopicModal(phaseNum, topicId);
    });
  });

  container.querySelectorAll(".quick-topic-status-select").forEach(select => {
    select.addEventListener("change", (e) => {
      e.stopPropagation();
      const phaseNum = parseInt(select.getAttribute("data-phase"));
      const topicId = select.getAttribute("data-topic");
      const newStatus = select.value;
      updateTopicStatus(phaseNum, topicId, newStatus);
    });
  });

  const addPhaseBtn = container.querySelector("#addNewPhaseBtn");
  if (addPhaseBtn) {
    addPhaseBtn.addEventListener("click", () => openPhaseModal());
  }

  container.querySelectorAll(".edit-phase-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const phaseNum = parseInt(btn.getAttribute("data-phase"));
      openPhaseModal(phaseNum);
    });
  });

  container.querySelectorAll(".add-topic-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const phaseNum = parseInt(btn.getAttribute("data-phase"));
      openTopicEditModal(phaseNum);
    });
  });

  container.querySelectorAll(".edit-topic-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const phaseNum = parseInt(btn.getAttribute("data-phase"));
      const topicId = btn.getAttribute("data-topic");
      openTopicEditModal(phaseNum, topicId);
    });
  });
}

function renderPhaseCard(phase) {
  const totalTopics = phase.topics ? phase.topics.length : 0;
  const completedTopics = phase.topics ? phase.topics.filter(t => t.status === "completed").length : 0;
  const progressPercent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  return `
    <article class="phase-card" id="phase-card-${phase.number}">
      <div class="phase-card-header">
        <div class="phase-header-left">
          <span class="phase-badge">Phase ${phase.number}</span>
          <div class="phase-title-group">
            <h2 class="phase-title">${escapeHtml(phase.title)}</h2>
            <div class="phase-meta">
              <span>${escapeHtml(phase.difficulty)}</span>
              <span>&bull;</span>
              <span>~${phase.estimatedHours || 20} hours</span>
              <span>&bull;</span>
              <span>${completedTopics} / ${totalTopics} topics completed</span>
            </div>
          </div>
        </div>

        <div class="phase-header-right">
          <span class="phase-progress-pill">${progressPercent}%</span>
          <button class="btn-secondary btn-sm edit-phase-btn" data-phase="${phase.number}" title="Edit phase" style="padding: 4px 10px; font-size: 0.75rem;">Edit</button>
          <svg class="chevron-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>

      <div class="phase-body">
        <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 16px;">
          ${escapeHtml(phase.shortDescription || "")}
        </p>

        ${phase.learningObjectives && phase.learningObjectives.length > 0 ? `
          <div class="phase-section-block">
            <h3 class="phase-section-title">Core Learning Objectives</h3>
            <ul class="objectives-list">
              ${phase.learningObjectives.map(obj => `<li>${escapeHtml(obj)}</li>`).join("")}
            </ul>
          </div>
        ` : ""}

        <div class="phase-section-block">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <h3 class="phase-section-title" style="margin-bottom: 0;">Topics (${totalTopics})</h3>
            <button class="btn-secondary btn-sm add-topic-btn" data-phase="${phase.number}" style="padding: 4px 10px; font-size: 0.75rem;">+ Add Topic</button>
          </div>

          <table class="topics-table">
            <thead>
              <tr>
                <th>Topic</th>
                <th>Subtopics</th>
                <th>Difficulty</th>
                <th>Status</th>
                <th style="text-align: right;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${phase.topics && phase.topics.length > 0 ? phase.topics.map(t => `
                <tr>
                  <td style="font-weight: 600; color: var(--text-primary);">${escapeHtml(t.title)}</td>
                  <td style="color: var(--text-secondary);">${t.subtopics ? t.subtopics.slice(0, 3).map(s => escapeHtml(s)).join(", ") + (t.subtopics.length > 3 ? "..." : "") : "-"}</td>
                  <td><span style="font-size: 0.75rem; color: var(--text-secondary);">${escapeHtml(t.difficulty || "Beginner")}</span></td>
                  <td>
                    <select class="form-select quick-topic-status-select" data-phase="${phase.number}" data-topic="${t.id}" style="padding: 2px 6px; font-size: 0.75rem;">
                      <option value="not-started" ${t.status === "not-started" ? "selected" : ""}>Not Started</option>
                      <option value="in-progress" ${t.status === "in-progress" ? "selected" : ""}>In Progress</option>
                      <option value="completed" ${t.status === "completed" ? "selected" : ""}>Completed</option>
                      <option value="needs-review" ${t.status === "needs-review" ? "selected" : ""}>Needs Review</option>
                      <option value="skipped" ${t.status === "skipped" ? "selected" : ""}>Skipped</option>
                    </select>
                  </td>
                  <td style="text-align: right; white-space: nowrap;">
                    <button class="btn-secondary btn-sm view-topic-btn" data-phase="${phase.number}" data-topic="${t.id}">Details</button>
                    <button class="btn-secondary btn-sm edit-topic-btn" data-phase="${phase.number}" data-topic="${t.id}" title="Edit topic">Edit</button>
                  </td>
                </tr>
              `).join("") : `
                <tr>
                  <td colspan="5" style="text-align: center; color: var(--text-tertiary); padding: 24px;">No topics in this phase yet.</td>
                </tr>
              `}
            </tbody>
          </table>
        </div>

        ${phase.exercises && phase.exercises.length > 0 ? `
          <div class="phase-section-block">
            <h3 class="phase-section-title">Practical Exercises</h3>
            <div style="display: flex; flex-direction: column; gap: 6px;">
              ${phase.exercises.map(ex => `
                <div style="padding: 8px 12px; background-color: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.8125rem;">
                  <strong>${escapeHtml(ex.title)}:</strong> ${escapeHtml(ex.description)}
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}
      </div>
    </article>
  `;
}

/* ==========================================================================
   VIEW 3: Projects & Capstone
   ========================================================================== */
function renderProjects(container) {
  container.innerHTML = `
    <header class="page-header">
      <h1 class="page-title">Project Roadmap & Capstone</h1>
      <p class="page-description">Five suggested real-world projects that take you from C# foundations to a complete Full Stack deployment. You can add your GitHub repository link as soon as you push your code!</p>
    </header>

    <div class="projects-grid">
      ${state.data.projects.map(project => `
        <article class="project-card ${project.id === "project-5" ? "capstone" : ""}">
          <div class="project-header">
            <div>
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                <span class="status-badge ${project.status}">${escapeHtml(project.status)}</span>
                <span style="font-size: 0.75rem; color: var(--text-secondary);">${escapeHtml(project.difficulty)}</span>
              </div>
              <h2 class="project-title">${escapeHtml(project.title)}</h2>
            </div>
            <div>
              <button class="btn-secondary btn-sm edit-repo-btn" data-proj="${project.id}">
                ${project.githubUrl ? "Edit GitHub Link" : "+ Link GitHub Repo"}
              </button>
            </div>
          </div>

          <p style="font-size: 0.875rem; color: var(--text-secondary);">${escapeHtml(project.description)}</p>

          <div class="project-tech-tags">
            ${project.technologies.map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join("")}
          </div>

          <!-- GitHub Repo Link Container -->
          <div class="project-repo-box">
            ${project.githubUrl ? `
              <div style="display: flex; align-items: center; gap: 8px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" style="font-weight: 500;">
                  ${escapeHtml(project.githubUrl)}
                </a>
              </div>
              <span style="font-size: 0.75rem; color: var(--text-tertiary);">Status: ${escapeHtml(project.deploymentStatus || "Active")}</span>
            ` : `
              <span style="color: var(--text-tertiary);">No GitHub repository linked yet. Click the button above to add your link once pushed!</span>
            `}
          </div>

          ${project.entities && project.entities.length > 0 ? `
            <div style="font-size: 0.8125rem;">
              <strong>Core Entities:</strong> ${project.entities.map(e => escapeHtml(e)).join(", ")}
            </div>
          ` : ""}

          <!-- Tasks Checklist -->
          <div class="project-section">
            <h3 style="font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary); margin-bottom: 8px;">
              Project Deliverables & Milestones
            </h3>
            <div class="project-tasks-list">
              ${project.tasks.map(task => `
                <label class="task-checkbox-row">
                  <input type="checkbox" class="project-task-check" data-proj="${project.id}" data-task="${task.id}" ${task.completed ? "checked" : ""} />
                  <span style="${task.completed ? "text-decoration: line-through; color: var(--text-tertiary);" : "color: var(--text-primary);"}">${escapeHtml(task.title)}</span>
                </label>
              `).join("")}
            </div>
          </div>
        </article>
      `).join("")}
    </div>
  `;

  container.querySelectorAll(".project-task-check").forEach(box => {
    box.addEventListener("change", () => {
      const projId = box.getAttribute("data-proj");
      const taskId = box.getAttribute("data-task");
      const project = state.data.projects.find(p => p.id === projId);
      if (project) {
        const task = project.tasks.find(t => t.id === taskId);
        if (task) {
          task.completed = box.checked;
          if (project.tasks.every(t => t.completed)) {
            project.status = "completed";
          } else if (project.tasks.some(t => t.completed)) {
            project.status = "in-progress";
          } else {
            project.status = "not-started";
          }
          state.save();
          showToast(`Task updated for ${project.title}`);
        }
      }
    });
  });

  container.querySelectorAll(".edit-repo-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const projId = btn.getAttribute("data-proj");
      openProjectRepoModal(projId);
    });
  });
}

function openProjectRepoModal(projectId) {
  const project = state.data.projects.find(p => p.id === projectId);
  if (!project) return;
  const modal = document.getElementById("editProjectRepoModalBackdrop");
  document.getElementById("projectRepoFormId").value = project.id;
  document.getElementById("projectRepoUrl").value = project.githubUrl || "";
  document.getElementById("projectDeploymentStatus").value = project.deploymentStatus || "";
  modal.classList.add("active");
}

function closeProjectRepoModal() {
  const modal = document.getElementById("editProjectRepoModalBackdrop");
  if (modal) modal.classList.remove("active");
}

/* ==========================================================================
   VIEW 4: Skills Tracker (Full CRUD)
   ========================================================================== */
function renderSkills(container) {
  container.innerHTML = `
    <header class="page-header" style="flex-direction: row; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
      <div>
        <h1 class="page-title">Skills Tracker</h1>
        <p class="page-description">Track and customize your engineering competencies across 9 core domains. You can add, edit, or delete any skill.</p>
      </div>
      <button class="btn-primary" id="addNewSkillBtn">+ Add New Skill</button>
    </header>

    <div class="skills-grid">
      ${state.data.skills.map(skill => `
        <article class="skill-card">
          <div class="skill-header">
            <div>
              <span class="skill-category">${escapeHtml(skill.category)}</span>
              <h2 class="skill-name">${escapeHtml(skill.name)}</h2>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="status-badge ${skill.progress >= 80 ? "completed" : "in-progress"}">${escapeHtml(skill.level)}</span>
              <button class="btn-secondary btn-sm edit-skill-btn" data-id="${skill.id}" title="Edit skill">Edit</button>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-secondary); margin-top: 4px;">
            <span>Proficiency</span>
            <strong>${skill.progress}%</strong>
          </div>
          <div class="progress-bar-container" style="margin-top: 2px;">
            <div class="progress-bar-fill" style="width: ${skill.progress}%;"></div>
          </div>
        </article>
      `).join("")}
    </div>
  `;

  container.querySelector("#addNewSkillBtn")?.addEventListener("click", () => openSkillModal());

  container.querySelectorAll(".edit-skill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      openSkillModal(id);
    });
  });

  container.querySelectorAll(".delete-skill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      deleteSkill(id);
    });
  });
}

function openSkillModal(skillId = null) {
  const modal = document.getElementById("editSkillModalBackdrop");
  const deleteBtn = document.getElementById("deleteSkillModalBtn");
  if (deleteBtn) {
    deleteBtn.style.display = skillId ? "inline-flex" : "none";
  }
  const heading = document.getElementById("skillModalHeading");
  const formId = document.getElementById("skillFormId");
  const name = document.getElementById("skillFormName");
  const category = document.getElementById("skillFormCategory");
  const level = document.getElementById("skillFormLevel");
  const progress = document.getElementById("skillFormProgress");

  if (skillId) {
    const skill = state.data.skills.find(s => s.id === skillId);
    if (!skill) return;
    heading.textContent = "Edit Skill";
    formId.value = skill.id;
    name.value = skill.name;
    category.value = skill.category;
    level.value = skill.level;
    progress.value = skill.progress;
  } else {
    heading.textContent = "Add New Skill";
    formId.value = "";
    name.value = "";
    category.value = "Programming";
    level.value = "Beginner";
    progress.value = 0;
  }

  modal.classList.add("active");
}

function closeSkillModal() {
  const modal = document.getElementById("editSkillModalBackdrop");
  if (modal) modal.classList.remove("active");
}

function deleteSkill(id) {
  const skill = state.data.skills.find(s => s.id === id);
  if (!skill) return;
  if (confirm(`Delete skill "${skill.name}"?`)) {
    state.data.skills = state.data.skills.filter(s => s.id !== id);
    state.save();
    showToast(`Deleted ${skill.name}`);
    renderActiveView();
  }
}

/* ==========================================================================
   VIEW 5: Technology Stack Tracker (Full CRUD)
   ========================================================================== */
function renderTechnologies(container) {
  container.innerHTML = `
    <header class="page-header" style="flex-direction: row; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
      <div>
        <h1 class="page-title">Technology Stack Tracker</h1>
        <p class="page-description">Manage technologies across languages, frameworks, ORMs, and databases. Add, edit, or remove technologies freely.</p>
      </div>
      <button class="btn-primary" id="addNewTechBtn">+ Add New Technology</button>
    </header>

    <div class="skills-grid">
      ${state.data.technologies.map(tech => `
        <article class="skill-card">
          <div class="skill-header">
            <div>
              <span class="skill-category">${escapeHtml(tech.category)}</span>
              <h2 class="skill-name">${escapeHtml(tech.name)}</h2>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="status-badge ${tech.status === "Mastered" ? "completed" : "in-progress"}">${escapeHtml(tech.status)}</span>
              <button class="btn-secondary btn-sm edit-tech-btn" data-id="${tech.id}" title="Edit technology">Edit</button>
            </div>
          </div>
          <p style="font-size: 0.8125rem; color: var(--text-secondary); margin: 6px 0;">${escapeHtml(tech.note || "")}</p>
          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${tech.progress}%;"></div>
          </div>
        </article>
      `).join("")}
    </div>
  `;

  container.querySelector("#addNewTechBtn")?.addEventListener("click", () => openTechModal());

  container.querySelectorAll(".edit-tech-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      openTechModal(id);
    });
  });

  container.querySelectorAll(".delete-tech-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      deleteTech(id);
    });
  });
}

function openTechModal(techId = null) {
  const modal = document.getElementById("editTechModalBackdrop");
  const deleteBtn = document.getElementById("deleteTechModalBtn");
  if (deleteBtn) {
    deleteBtn.style.display = techId ? "inline-flex" : "none";
  }
  const heading = document.getElementById("techModalHeading");
  const formId = document.getElementById("techFormId");
  const name = document.getElementById("techFormName");
  const category = document.getElementById("techFormCategory");
  const status = document.getElementById("techFormStatus");
  const progress = document.getElementById("techFormProgress");
  const note = document.getElementById("techFormNote");

  if (techId) {
    const tech = state.data.technologies.find(t => t.id === techId);
    if (!tech) return;
    heading.textContent = "Edit Technology";
    formId.value = tech.id;
    name.value = tech.name;
    category.value = tech.category;
    status.value = tech.status;
    progress.value = tech.progress;
    note.value = tech.note || "";
  } else {
    heading.textContent = "Add New Technology";
    formId.value = "";
    name.value = "";
    category.value = "Framework";
    status.value = "Not Started";
    progress.value = 0;
    note.value = "";
  }

  modal.classList.add("active");
}

function closeTechModal() {
  const modal = document.getElementById("editTechModalBackdrop");
  if (modal) modal.classList.remove("active");
}

function deleteTech(id) {
  const tech = state.data.technologies.find(t => t.id === id);
  if (!tech) return;
  if (confirm(`Delete technology "${tech.name}"?`)) {
    state.data.technologies = state.data.technologies.filter(t => t.id !== id);
    state.save();
    showToast(`Deleted ${tech.name}`);
    renderActiveView();
  }
}

/* ==========================================================================
   VIEW 6: Spaced Reviews Dashboard
   ========================================================================== */
function renderReviews(container) {
  const reviewTopics = [];
  if (state.data.phases) {
    state.data.phases.forEach(p => {
      if (p.topics) {
        p.topics.forEach(t => {
          if (t.reviewStatus && t.reviewStatus !== "none") {
            reviewTopics.push({ phaseNumber: p.number, phaseTitle: p.title, topic: t });
          }
        });
      }
    });
  }

  container.innerHTML = `
    <header class="page-header">
      <h1 class="page-title">Spaced Reviews Dashboard</h1>
      <p class="page-description">Active recall queue. Flag topics inside their detail view to schedule them for daily, weekly, or future revision.</p>
    </header>

    ${reviewTopics.length === 0 ? `
      <div class="empty-state">
        <h2 class="empty-state-title">No topics flagged for review yet</h2>
        <p class="empty-state-text">Open any topic in the curriculum and set its review interval to flag it for your review queue.</p>
      </div>
    ` : `
      <div class="phase-list">
        ${reviewTopics.map(item => `
          <div class="phase-card" style="padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
            <div>
              <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 2px;">
                Phase ${item.phaseNumber}: ${escapeHtml(item.phaseTitle)}
              </div>
              <h3 style="font-size: 0.9375rem; font-weight: 600; color: var(--text-primary);">${escapeHtml(item.topic.title)}</h3>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="status-badge ${item.topic.reviewStatus === "mastered" ? "completed" : "needs-review"}">
                ${escapeHtml(item.topic.reviewStatus)}
              </span>
              <button class="btn-secondary btn-sm view-topic-btn" data-phase="${item.phaseNumber}" data-topic="${item.topic.id}">
                Review Now
              </button>
            </div>
          </div>
        `).join("")}
      </div>
    `}
  `;

  container.querySelectorAll(".view-topic-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const pNum = parseInt(btn.getAttribute("data-phase"));
      const tId = btn.getAttribute("data-topic");
      openTopicModal(pNum, tId);
    });
  });
}

/* ==========================================================================
   VIEW 7: Study Plan & Hours (Dynamic, no hardcoded past dates)
   ========================================================================== */
function renderStudyPlan(container) {
  const plan = state.data.studyPlan || { weeklyTargetHours: 18, dailyTargetHours: 2.5, currentGoal: "Start Phase 0", streakDays: 0, studyLogs: [] };

  container.innerHTML = `
    <header class="page-header">
      <h1 class="page-title">Study Plan & Learning Hours</h1>
      <p class="page-description">Set study targets and log your daily sessions whenever you start. No past dates are hardcoded.</p>
    </header>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 24px;">
      <article class="metric-card">
        <h2 class="section-title">Weekly Targets</h2>
        <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.875rem;">
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-secondary);">Weekly Target:</span>
            <strong>${plan.weeklyTargetHours} hours</strong>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-secondary);">Daily Target:</span>
            <strong>${plan.dailyTargetHours} hours</strong>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-secondary);">Current Streak:</span>
            <strong>${plan.streakDays} study days</strong>
          </div>
        </div>
      </article>

      <article class="metric-card">
        <h2 class="section-title">Log Study Session</h2>
        <form id="studyLogForm" style="display: flex; flex-direction: column; gap: 8px;">
          <input type="text" id="logSummary" class="form-input" placeholder="What did you study today?" required />
          <div style="display: flex; gap: 8px;">
            <input type="number" id="logHours" class="form-input" step="0.5" min="0.5" placeholder="Hours" style="width: 100px;" required />
            <button type="submit" class="btn-primary" style="flex: 1;">Record Session</button>
          </div>
        </form>
      </article>
    </div>

    <section>
      <h2 class="section-title">Study Session History</h2>
      <div class="phase-list">
        ${(plan.studyLogs && plan.studyLogs.length > 0) ? plan.studyLogs.map(log => `
          <div style="padding: 10px 14px; background-color: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-weight: 500; font-size: 0.875rem;">${escapeHtml(log.summary)}</div>
              <div style="font-size: 0.75rem; color: var(--text-tertiary);">${escapeHtml(log.date)}</div>
            </div>
            <span class="status-badge completed">${log.hours} hrs</span>
          </div>
        `).join("") : `
          <div class="empty-state" style="padding: 32px 16px;">
            <h3 class="empty-state-title">No sessions logged yet</h3>
            <p class="empty-state-text">Use the form above to record your very first study session whenever you start!</p>
          </div>
        `}
      </div>
    </section>
  `;

  const logForm = container.querySelector("#studyLogForm");
  if (logForm) {
    logForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const summary = document.getElementById("logSummary").value;
      const hours = parseFloat(document.getElementById("logHours").value);
      state.data.studyPlan = state.data.studyPlan || { weeklyTargetHours: 18, dailyTargetHours: 2.5, currentGoal: "", streakDays: 0, studyLogs: [] };
      state.data.studyPlan.studyLogs = state.data.studyPlan.studyLogs || [];
      const todayStr = new Date().toLocaleDateString();
      state.data.studyPlan.studyLogs.push({
        date: todayStr,
        hours,
        summary
      });
      state.data.studyPlan.streakDays = (state.data.studyPlan.streakDays || 0) + 1;
      state.save();
      showToast("Study session recorded.");
      renderStudyPlan(container);
    });
  }
}

/* ==========================================================================
   VIEW 8: Interview Questions (100 Questions with 10-per-page Pagination)
   ========================================================================== */
function renderInterviewQuestions(container) {
  const allQuestions = state.data.interviewQuestions || [];
  const totalQuestions = allQuestions.length;
  const pageSize = state.interviewPageSize || 10;
  const totalPages = Math.max(1, Math.ceil(totalQuestions / pageSize));

  if (state.interviewPage > totalPages) state.interviewPage = totalPages;
  if (state.interviewPage < 1) state.interviewPage = 1;

  const startIndex = (state.interviewPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalQuestions);
  const pagedQuestions = allQuestions.slice(startIndex, endIndex);

  container.innerHTML = `
    <header class="page-header" style="flex-direction: row; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
      <div>
        <h1 class="page-title">Technical Interview Preparation (100 Questions)</h1>
        <p class="page-description">100 real, in-depth technical interview questions across C#, OOP, Async, SQL Server, EF Core, Web API, Architecture, Security, and Angular.</p>
      </div>
      <div style="font-size: 0.8125rem; color: var(--text-secondary);">
        Showing questions ${startIndex + 1} to ${endIndex} of ${totalQuestions}
      </div>
    </header>

    <div class="interview-list">
      ${pagedQuestions.map((q, idx) => `
        <article class="interview-card" id="interview-${q.id}">
          <div class="interview-card-header">
            <div style="display: flex; align-items: center; gap: 12px; min-width: 0;">
              <span class="phase-badge">${escapeHtml(q.category)}</span>
              <span class="interview-question">#${startIndex + idx + 1}. ${escapeHtml(q.question)}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
              <span class="status-badge ${q.difficulty === "Easy" ? "completed" : q.difficulty === "Medium" ? "in-progress" : "needs-review"}">${escapeHtml(q.difficulty)}</span>
              <svg class="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
          <div class="interview-body">
            <div class="answer-box">
              <strong>Model Technical Answer:</strong>\n${escapeHtml(q.answer)}
            </div>
            ${q.personalNote ? `
              <div style="font-size: 0.8125rem; color: var(--accent); padding: 8px; background-color: var(--accent-subtle); border-radius: var(--radius-sm);">
                <strong>Key Reminder:</strong> ${escapeHtml(q.personalNote)}
              </div>
            ` : ""}
          </div>
        </article>
      `).join("")}
    </div>

    <!-- Pagination Stepper -->
    <div class="pagination-wrapper">
      <button class="page-btn" id="prevPageBtn" ${state.interviewPage === 1 ? "disabled" : ""}>&larr; Prev</button>
      ${Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => `
        <button class="page-btn ${pageNum === state.interviewPage ? "active" : ""}" data-page="${pageNum}">
          ${pageNum}
        </button>
      `).join("")}
      <button class="page-btn" id="nextPageBtn" ${state.interviewPage === totalPages ? "disabled" : ""}>Next &rarr;</button>
    </div>
  `;

  container.querySelectorAll(".interview-card-header").forEach(header => {
    header.addEventListener("click", () => {
      const card = header.closest(".interview-card");
      card.classList.toggle("expanded");
    });
  });

  container.querySelectorAll(".page-btn[data-page]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.interviewPage = parseInt(btn.getAttribute("data-page"));
      renderInterviewQuestions(container);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  container.querySelector("#prevPageBtn")?.addEventListener("click", () => {
    if (state.interviewPage > 1) {
      state.interviewPage--;
      renderInterviewQuestions(container);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  container.querySelector("#nextPageBtn")?.addEventListener("click", () => {
    if (state.interviewPage < totalPages) {
      state.interviewPage++;
      renderInterviewQuestions(container);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

/* ==========================================================================
   VIEW 9: Junior Job Readiness Checklist (Full CRUD)
   ========================================================================== */
function renderJobReadiness(container) {
  const m = state.getMetrics();

  container.innerHTML = `
    <header class="page-header" style="flex-direction: row; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
      <div>
        <h1 class="page-title">Junior Job-Readiness Checklist</h1>
        <p class="page-description">Objective assessment of candidate readiness based on 30 concrete abilities. You can check items off or add new criteria.</p>
      </div>
      <button class="btn-primary" id="addReadinessItemBtn">+ Add New Criterion</button>
    </header>

    <section class="recommendation-banner" style="margin-bottom: 24px;">
      <div class="recommendation-content">
        <span class="recommendation-tag">Readiness Progress</span>
        <h2 class="recommendation-title">${m.readinessProgress}% Completed toward Job Readiness</h2>
        <p class="recommendation-desc">Check each capability as you master building it independently.</p>
      </div>
      <div style="min-width: 120px;">
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${m.readinessProgress}%;"></div>
        </div>
      </div>
    </section>

    <div class="phase-list">
      ${state.data.jobReadinessChecklist.map((category, catIdx) => `
        <article class="phase-card" style="padding: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h2 style="font-size: 1rem; font-weight: 600; color: var(--text-primary);">${escapeHtml(category.category)}</h2>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${category.items.map(item => `
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                <label class="checklist-item" style="cursor: pointer; flex: 1;">
                  <input type="checkbox" class="readiness-item-check" data-item="${item.id}" ${item.completed ? "checked" : ""} />
                  <span style="${item.completed ? "text-decoration: line-through; color: var(--text-tertiary);" : "color: var(--text-primary);"}">${escapeHtml(item.text)}</span>
                </label>
                <div style="display: flex; gap: 4px;">
                  <button class="btn-secondary btn-sm edit-readiness-btn" data-cat="${catIdx}" data-id="${item.id}">Edit</button>
                </div>
              </div>
            `).join("")}
          </div>
        </article>
      `).join("")}
    </div>
  `;

  container.querySelectorAll(".readiness-item-check").forEach(box => {
    box.addEventListener("change", () => {
      const itemId = box.getAttribute("data-item");
      state.data.jobReadinessChecklist.forEach(cat => {
        const found = cat.items.find(i => i.id === itemId);
        if (found) found.completed = box.checked;
      });
      state.save();
      renderJobReadiness(container);
      showToast("Readiness criteria updated.");
    });
  });

  container.querySelector("#addReadinessItemBtn")?.addEventListener("click", () => openReadinessModal());

  container.querySelectorAll(".edit-readiness-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const catIdx = parseInt(btn.getAttribute("data-cat"));
      const itemId = btn.getAttribute("data-id");
      openReadinessModal(catIdx, itemId);
    });
  });

  container.querySelectorAll(".delete-readiness-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const catIdx = parseInt(btn.getAttribute("data-cat"));
      const itemId = btn.getAttribute("data-id");
      deleteReadinessItem(catIdx, itemId);
    });
  });
}

function openReadinessModal(catIdx = null, itemId = null) {
  const modal = document.getElementById("editReadinessModalBackdrop");
  const deleteBtn = document.getElementById("deleteReadinessModalBtn");
  if (deleteBtn) {
    deleteBtn.style.display = (catIdx !== null && itemId) ? "inline-flex" : "none";
  }
  const heading = document.getElementById("readinessModalHeading");
  const categorySelect = document.getElementById("readinessFormCategory");
  const textInput = document.getElementById("readinessFormText");
  const catIdxInput = document.getElementById("readinessFormCatIdx");
  const itemIdInput = document.getElementById("readinessFormItemId");

  categorySelect.innerHTML = state.data.jobReadinessChecklist.map((c, i) => `
    <option value="${i}">${escapeHtml(c.category)}</option>
  `).join("");

  if (catIdx !== null && itemId) {
    const category = state.data.jobReadinessChecklist[catIdx];
    const item = category.items.find(it => it.id === itemId);
    heading.textContent = "Edit Criterion";
    catIdxInput.value = catIdx;
    itemIdInput.value = itemId;
    categorySelect.value = catIdx;
    textInput.value = item ? item.text : "";
  } else {
    heading.textContent = "Add Readiness Criterion";
    catIdxInput.value = "";
    itemIdInput.value = "";
    categorySelect.value = 0;
    textInput.value = "";
  }

  modal.classList.add("active");
}

function closeReadinessModal() {
  const modal = document.getElementById("editReadinessModalBackdrop");
  if (modal) modal.classList.remove("active");
}

function deleteReadinessItem(catIdx, itemId) {
  const category = state.data.jobReadinessChecklist[catIdx];
  if (!category) return;
  if (confirm("Delete this readiness criterion?")) {
    category.items = category.items.filter(i => i.id !== itemId);
    state.save();
    showToast("Criterion deleted.");
    renderActiveView();
  }
}

/* ==========================================================================
   VIEW 10: Notes & Resources
   ========================================================================== */
function renderNotesAndResources(container) {
  container.innerHTML = `
    <header class="page-header" style="flex-direction: row; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
      <div>
        <h1 class="page-title">Personal Notes & Curated Resources</h1>
        <p class="page-description">Maintain custom cheat sheets, code snippets, and bookmark external technical documentation.</p>
      </div>
      <button class="btn-primary" id="addNoteBtn">+ Add Note</button>
    </header>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px; margin-bottom: 24px;">
      ${state.data.notes.map(note => `
        <article class="metric-card" style="gap: 8px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2 style="font-size: 0.9375rem; font-weight: 600;">${escapeHtml(note.title)}</h2>
            ${note.pinned ? `<span class="status-badge in-progress">Pinned</span>` : ""}
          </div>
          <p style="font-size: 0.8125rem; color: var(--text-secondary); line-height: 1.5; white-space: pre-line;">${escapeHtml(note.content)}</p>
        </article>
      `).join("")}
    </div>

    <section>
      <h2 class="section-title">Recommended Documentation & Guides</h2>
      <div class="phase-list">
        ${state.data.resources.map(res => `
          <div style="padding: 10px 14px; background-color: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
            <div>
              <a href="${escapeHtml(res.url)}" target="_blank" rel="noopener noreferrer" style="font-weight: 600; font-size: 0.875rem;">
                ${escapeHtml(res.title)}
              </a>
              <div style="font-size: 0.75rem; color: var(--text-tertiary);">${escapeHtml(res.type)}</div>
            </div>
            <a href="${escapeHtml(res.url)}" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-sm">Visit &rarr;</a>
          </div>
        `).join("")}
      </div>
    </section>
  `;

  const addNoteBtn = container.querySelector("#addNoteBtn");
  if (addNoteBtn) {
    addNoteBtn.addEventListener("click", () => {
      const noteTitle = prompt("Enter note title:");
      if (!noteTitle) return;
      const noteContent = prompt("Enter note content:");
      if (!noteContent) return;
      state.data.notes.push({
        id: `note-${Date.now()}`,
        title: noteTitle,
        content: noteContent,
        pinned: false,
        updatedAt: new Date().toISOString()
      });
      state.save();
      showToast("Note added.");
      renderNotesAndResources(container);
    });
  }
}

/* ==========================================================================
   VIEW 11: Archive
   ========================================================================== */
function renderArchive(container) {
  const archive = state.data.archive || { phases: [], topics: [], projects: [] };

  container.innerHTML = `
    <header class="page-header">
      <h1 class="page-title">Archived Items</h1>
      <p class="page-description">Soft-deleted items are preserved here. You can restore them anytime.</p>
    </header>

    ${archive.phases.length === 0 && archive.topics.length === 0 ? `
      <div class="empty-state">
        <h2 class="empty-state-title">Archive is empty</h2>
        <p class="empty-state-text">When you delete phases or topics in Edit Mode, they are safely preserved here.</p>
      </div>
    ` : `
      <div class="phase-list">
        ${archive.phases.map(phase => `
          <div style="padding: 12px 16px; background-color: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong>Phase ${phase.number}: ${escapeHtml(phase.title)}</strong>
              <div style="font-size: 0.75rem; color: var(--text-tertiary);">Archived Phase</div>
            </div>
            <button class="btn-secondary btn-sm restore-phase-btn" data-id="${phase.id}">Restore</button>
          </div>
        `).join("")}
      </div>
    `}
  `;

  container.querySelectorAll(".restore-phase-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const idx = state.data.archive.phases.findIndex(p => p.id === id);
      if (idx !== -1) {
        const restored = state.data.archive.phases.splice(idx, 1)[0];
        state.data.phases.push(restored);
        state.data.phases.sort((a, b) => a.number - b.number);
        state.save();
        showToast(`Restored Phase ${restored.number}`);
        renderArchive(container);
      }
    });
  });
}

/* ==========================================================================
   VIEW 12: Settings & Backup
   ========================================================================== */
function renderSettings(container) {
  container.innerHTML = `
    <header class="page-header">
      <h1 class="page-title">Settings & Data Management</h1>
      <p class="page-description">Export, import, and backup your personalized learning curriculum.</p>
    </header>

    <div style="display: flex; flex-direction: column; gap: 20px; max-width: 680px;">
      <article class="metric-card">
        <h2 class="section-title">Data Backup & Portability</h2>
        <p style="font-size: 0.8125rem; color: var(--text-secondary); margin-bottom: 12px;">
          Export your entire roadmap as a clean JSON backup file.
        </p>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn-primary" id="exportDataBtn">Export Roadmap JSON</button>
          <label class="btn-secondary" style="cursor: pointer;">
            Import Roadmap JSON
            <input type="file" id="importFileInput" accept=".json" style="display: none;" />
          </label>
        </div>
      </article>

      <article class="metric-card">
        <h2 class="section-title">Local Snapshot Backup</h2>
        <p style="font-size: 0.8125rem; color: var(--text-secondary); margin-bottom: 12px;">
          Create an in-browser snapshot to quickly recover if needed.
        </p>
        <div style="display: flex; gap: 8px;">
          <button class="btn-secondary" id="createSnapshotBtn">Save Local Snapshot</button>
          <button class="btn-secondary" id="restoreSnapshotBtn">Restore Local Snapshot</button>
        </div>
      </article>

      <article class="metric-card" style="border-color: var(--status-danger);">
        <h2 class="section-title" style="color: var(--status-danger);">Danger Zone</h2>
        <p style="font-size: 0.8125rem; color: var(--text-secondary); margin-bottom: 12px;">
          Resetting will restore the initial curriculum data. A backup snapshot is automatically created prior to reset.
        </p>
        <button class="btn-danger" id="resetRoadmapBtn">Reset to Default Roadmap</button>
      </article>
    </div>
  `;

  container.querySelector("#exportDataBtn")?.addEventListener("click", () => {
    if (storage) storage.exportJson(state.data);
    showToast("Roadmap exported successfully.");
  });

  const fileInput = container.querySelector("#importFileInput");
  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        if (storage) {
          const res = storage.importJson(event.target.result);
          if (res.success) {
            state.data = res.data;
            showToast("Roadmap imported successfully.", "success");
            navigateTo("dashboard");
          } else {
            showToast(`Import failed: ${res.error}`, "error");
          }
        }
      };
      reader.readAsText(file);
    });
  }

  container.querySelector("#createSnapshotBtn")?.addEventListener("click", () => {
    if (storage) storage.createBackup(state.data);
    showToast("Local snapshot backup saved.", "success");
  });

  container.querySelector("#restoreSnapshotBtn")?.addEventListener("click", () => {
    if (confirm("Restore from local snapshot backup?")) {
      if (storage) {
        const res = storage.restoreBackup();
        if (res.success) {
          state.data = res.data;
          showToast("Snapshot restored successfully.", "success");
          renderActiveView();
        } else {
          showToast(res.error, "error");
        }
      }
    }
  });

  container.querySelector("#resetRoadmapBtn")?.addEventListener("click", () => {
    if (confirm("Reset all roadmap content to initial defaults?")) {
      if (storage) state.data = storage.reset();
      showToast("Roadmap reset to default.", "info");
      navigateTo("dashboard");
    }
  });
}

/* ==========================================================================
   Topic Detail Drawer Modal Controller
   ========================================================================== */
function openTopicModal(phaseNumber, topicId) {
  const phase = state.data.phases.find(p => p.number === phaseNumber);
  if (!phase || !phase.topics) return;
  const topic = phase.topics.find(t => t.id === topicId);
  if (!topic) return;

  state.activePhaseId = phaseNumber;
  state.activeTopic = topic;

  const modal = document.getElementById("topicModalBackdrop");
  const modalTitle = document.getElementById("modalTopicTitle");
  const modalMeta = document.getElementById("modalTopicMeta");
  const modalBody = document.getElementById("modalTopicBody");
  const statusSelect = document.getElementById("modalTopicStatusSelect");

  modalTitle.textContent = topic.title;
  modalMeta.textContent = `Phase ${phase.number}: ${phase.title} • ${topic.difficulty || "Beginner"} • ~${topic.estimatedHours || 3} hours`;
  statusSelect.value = topic.status || "not-started";

  const mastery = topic.mastery || {
    understandConcept: false,
    writeExample: false,
    solveExercise: false,
    explainWithoutNotes: false,
    usedInProject: false,
    debugProblem: false
  };

  modalBody.innerHTML = `
    <div class="topic-section" style="background-color: var(--bg-surface-secondary); padding: 12px 14px; border-radius: var(--radius-sm);">
      <span class="topic-section-label">Mastery Criteria Checklist</span>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px; margin-top: 6px;">
        <label class="task-checkbox-row">
          <input type="checkbox" id="m_concept" ${mastery.understandConcept ? "checked" : ""} />
          <span>I understand the concept</span>
        </label>
        <label class="task-checkbox-row">
          <input type="checkbox" id="m_example" ${mastery.writeExample ? "checked" : ""} />
          <span>I can write a code example</span>
        </label>
        <label class="task-checkbox-row">
          <input type="checkbox" id="m_exercise" ${mastery.solveExercise ? "checked" : ""} />
          <span>I solved the practical exercise</span>
        </label>
        <label class="task-checkbox-row">
          <input type="checkbox" id="m_explain" ${mastery.explainWithoutNotes ? "checked" : ""} />
          <span>I can explain without notes</span>
        </label>
        <label class="task-checkbox-row">
          <input type="checkbox" id="m_project" ${mastery.usedInProject ? "checked" : ""} />
          <span>I used it inside a project</span>
        </label>
        <label class="task-checkbox-row">
          <input type="checkbox" id="m_debug" ${mastery.debugProblem ? "checked" : ""} />
          <span>I can debug problems with it</span>
        </label>
      </div>
    </div>

    <div class="topic-section">
      <span class="topic-section-label">1. What is it?</span>
      <p class="topic-section-text">${escapeHtml(topic.whatIsIt || "Concept overview.")}</p>
    </div>

    <div class="topic-section">
      <span class="topic-section-label">2. Why do we need it?</span>
      <p class="topic-section-text">${escapeHtml(topic.whyDoWeNeedIt || "Why this concept exists.")}</p>
    </div>

    <div class="topic-section">
      <span class="topic-section-label">3. When should we use it?</span>
      <p class="topic-section-text">${escapeHtml(topic.whenToUseIt || "Appropriate scenarios.")}</p>
    </div>

    ${topic.codeExample ? `
      <div class="topic-section">
        <span class="topic-section-label">Practical Code Example</span>
        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span>C# / T-SQL / TypeScript</span>
            <button class="btn-secondary btn-sm" id="copyCodeBtn" style="padding: 2px 8px; font-size: 0.6875rem;">Copy</button>
          </div>
          <pre><code>${escapeHtml(topic.codeExample)}</code></pre>
        </div>
      </div>
    ` : ""}

    ${topic.commonMistakes ? `
      <div class="topic-section" style="border-left: 3px solid var(--status-warning); padding-left: 12px;">
        <span class="topic-section-label" style="color: var(--status-warning);">Common Mistakes to Avoid</span>
        <p class="topic-section-text">${escapeHtml(topic.commonMistakes)}</p>
      </div>
    ` : ""}

    ${topic.miniExercise ? `
      <div class="topic-section" style="border-left: 3px solid var(--accent); padding-left: 12px;">
        <span class="topic-section-label" style="color: var(--accent);">Actionable Mini Exercise</span>
        <p class="topic-section-text">${escapeHtml(topic.miniExercise)}</p>
      </div>
    ` : ""}

    ${topic.checklist && topic.checklist.length > 0 ? `
      <div class="topic-section">
        <span class="topic-section-label">Completion Checklist</span>
        <div class="checklist-container">
          ${topic.checklist.map((item, i) => `
            <label class="checklist-item">
              <input type="checkbox" class="topic-chk" data-idx="${i}" ${item.completed ? "checked" : ""} />
              <span>${escapeHtml(item.text)}</span>
            </label>
          `).join("")}
        </div>
      </div>
    ` : ""}
  `;

  const copyBtn = modalBody.querySelector("#copyCodeBtn");
  if (copyBtn && topic.codeExample) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(topic.codeExample).then(() => {
        showToast("Code copied to clipboard.");
      });
    });
  }

  modal.classList.add("active");
}

function closeTopicModal() {
  const modal = document.getElementById("topicModalBackdrop");
  if (modal) modal.classList.remove("active");
  state.activeTopic = null;
  state.activePhaseId = null;
}

function updateTopicStatus(phaseNumber, topicId, newStatus) {
  const phase = state.data.phases.find(p => p.number === phaseNumber);
  if (!phase || !phase.topics) return;
  const topic = phase.topics.find(t => t.id === topicId);
  if (!topic) return;

  topic.status = newStatus;
  state.save();
  showToast(`Updated "${topic.title}" to ${newStatus}`);
  renderActiveView();
}

/* ==========================================================================
   Phase Add / Edit Modal Controller
   ========================================================================== */
function openPhaseModal(phaseNumber = null) {
  const modal = document.getElementById("editPhaseModalBackdrop");
  const deleteBtn = document.getElementById("deletePhaseModalBtn");
  if (deleteBtn) {
    deleteBtn.style.display = phaseNumber !== null ? "inline-flex" : "none";
  }
  const heading = document.getElementById("phaseModalHeading");
  const formId = document.getElementById("phaseFormId");
  const title = document.getElementById("phaseFormTitle");
  const desc = document.getElementById("phaseFormDesc");
  const diff = document.getElementById("phaseFormDifficulty");
  const hours = document.getElementById("phaseFormHours");
  const tech = document.getElementById("phaseFormTech");
  const obj = document.getElementById("phaseFormObjectives");

  if (phaseNumber !== null) {
    const phase = state.data.phases.find(p => p.number === phaseNumber);
    if (!phase) return;
    heading.textContent = `Edit Phase ${phase.number}`;
    formId.value = phase.id;
    title.value = phase.title;
    desc.value = phase.shortDescription || "";
    diff.value = phase.difficulty || "Beginner";
    hours.value = phase.estimatedHours || 25;
    tech.value = (phase.technologies || []).join(", ");
    obj.value = (phase.learningObjectives || []).join("\n");
  } else {
    heading.textContent = "Add New Phase";
    formId.value = "";
    title.value = "";
    desc.value = "";
    diff.value = "Beginner";
    hours.value = 25;
    tech.value = "";
    obj.value = "";
  }

  modal.classList.add("active");
}

function closePhaseModal() {
  const modal = document.getElementById("editPhaseModalBackdrop");
  if (modal) modal.classList.remove("active");
}

function archivePhase(phaseNumber) {
  const idx = state.data.phases.findIndex(p => p.number === phaseNumber);
  if (idx === -1) return;
  const phase = state.data.phases[idx];
  if (confirm(`Archive Phase ${phase.number}: "${phase.title}"?`)) {
    state.data.archive = state.data.archive || { phases: [], topics: [], projects: [] };
    state.data.archive.phases.push(phase);
    state.data.phases.splice(idx, 1);
    state.save();
    showToast(`Archived Phase ${phase.number}`);
    renderActiveView();
  }
}

/* ==========================================================================
   Topic Add / Edit Controller
   ========================================================================== */
function openTopicEditModal(phaseNumber, topicId = null) {
  const modal = document.getElementById("editTopicModalBackdrop");
  const deleteBtn = document.getElementById("deleteTopicModalBtn");
  if (deleteBtn) {
    deleteBtn.style.display = topicId ? "inline-flex" : "none";
  }
  const phaseInput = document.getElementById("topicFormPhaseId");
  const topicIdInput = document.getElementById("topicFormId");
  const heading = document.getElementById("topicModalHeading");

  phaseInput.value = phaseNumber;

  if (topicId) {
    const phase = state.data.phases.find(p => p.number === phaseNumber);
    const topic = phase.topics.find(t => t.id === topicId);
    heading.textContent = `Edit Topic: ${topic.title}`;
    topicIdInput.value = topic.id;
    document.getElementById("topicFormTitle").value = topic.title;
    document.getElementById("topicFormSubtopics").value = (topic.subtopics || []).join(", ");
    document.getElementById("topicFormWhat").value = topic.whatIsIt || "";
    document.getElementById("topicFormWhy").value = topic.whyDoWeNeedIt || "";
    document.getElementById("topicFormWhen").value = topic.whenToUseIt || "";
    document.getElementById("topicFormCode").value = topic.codeExample || "";
    document.getElementById("topicFormMistakes").value = topic.commonMistakes || "";
    document.getElementById("topicFormExercise").value = topic.miniExercise || "";
  } else {
    heading.textContent = `Add Topic to Phase ${phaseNumber}`;
    topicIdInput.value = "";
    document.getElementById("topicFormTitle").value = "";
    document.getElementById("topicFormSubtopics").value = "";
    document.getElementById("topicFormWhat").value = "";
    document.getElementById("topicFormWhy").value = "";
    document.getElementById("topicFormWhen").value = "";
    document.getElementById("topicFormCode").value = "";
    document.getElementById("topicFormMistakes").value = "";
    document.getElementById("topicFormExercise").value = "";
  }

  modal.classList.add("active");
}

function closeTopicEditModal() {
  const modal = document.getElementById("editTopicModalBackdrop");
  if (modal) modal.classList.remove("active");
}

function archiveTopic(phaseNumber, topicId) {
  const phase = state.data.phases.find(p => p.number === phaseNumber);
  if (!phase || !phase.topics) return;
  const idx = phase.topics.findIndex(t => t.id === topicId);
  if (idx === -1) return;
  const topic = phase.topics[idx];
  if (confirm(`Delete topic "${topic.title}"?`)) {
    state.data.archive = state.data.archive || { phases: [], topics: [], projects: [] };
    state.data.archive.topics.push({ phaseNumber, topic });
    phase.topics.splice(idx, 1);
    state.save();
    showToast(`Deleted topic "${topic.title}"`);
    renderActiveView();
  }
}

// Utility: HTML Escaping
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ==========================================================================
   Global Initialization & Event Bindings
   ========================================================================== */
function init() {
  const initialHash = window.location.hash.replace("#", "") || "dashboard";
  navigateTo(initialHash);

  window.addEventListener("hashchange", () => {
    const route = window.location.hash.replace("#", "") || "dashboard";
    if (route !== state.currentRoute) {
      navigateTo(route);
    }
  });

  document.querySelectorAll(".nav-item").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const route = link.getAttribute("data-route");
      navigateTo(route);
    });
  });

  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const sidebar = document.getElementById("sidebar");
  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("mobile-open");
    });
  }

  const editModeSwitch = document.getElementById("editModeSwitch");
  if (editModeSwitch) {
    editModeSwitch.addEventListener("change", () => {
      state.editMode = editModeSwitch.checked;
      showToast(`Edit mode ${state.editMode ? "enabled" : "disabled"}`);
      renderActiveView();
    });
  }

  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const storedTheme = localStorage.getItem("dotnet_roadmap_theme") || "light";
  document.documentElement.setAttribute("data-theme", storedTheme);
  updateThemeLabel(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const nextTheme = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("dotnet_roadmap_theme", nextTheme);
      updateThemeLabel(nextTheme);
    });
  }

  function updateThemeLabel(theme) {
    const label = document.getElementById("themeLabel");
    if (label) label.textContent = theme === "dark" ? "Dark" : "Light";
  }

  const searchInput = document.getElementById("globalSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      state.searchQuery = query;
      if (query.length > 1) {
        performGlobalSearch(query);
      } else if (query.length === 0 && state.currentRoute !== "roadmap") {
        navigateTo("dashboard");
      }
    });
  }

  // Topic Modal Listeners
  document.getElementById("closeTopicModalBtn")?.addEventListener("click", closeTopicModal);
  const topicModalBackdrop = document.getElementById("topicModalBackdrop");
  if (topicModalBackdrop) {
    topicModalBackdrop.addEventListener("click", (e) => {
      if (e.target === topicModalBackdrop) closeTopicModal();
    });
  }

  document.getElementById("modalSaveTopicBtn")?.addEventListener("click", () => {
    if (!state.activeTopic) return;
    const statusSelect = document.getElementById("modalTopicStatusSelect");
    state.activeTopic.status = statusSelect.value;

    state.activeTopic.mastery = {
      understandConcept: document.getElementById("m_concept")?.checked || false,
      writeExample: document.getElementById("m_example")?.checked || false,
      solveExercise: document.getElementById("m_exercise")?.checked || false,
      explainWithoutNotes: document.getElementById("m_explain")?.checked || false,
      usedInProject: document.getElementById("m_project")?.checked || false,
      debugProblem: document.getElementById("m_debug")?.checked || false
    };

    const chks = document.querySelectorAll(".topic-chk");
    if (state.activeTopic.checklist) {
      chks.forEach(chk => {
        const idx = parseInt(chk.getAttribute("data-idx"));
        if (state.activeTopic.checklist[idx]) {
          state.activeTopic.checklist[idx].completed = chk.checked;
        }
      });
    }

    state.save();
    showToast(`Saved "${state.activeTopic.title}"`);
    closeTopicModal();
    renderActiveView();
  });

  document.getElementById("modalAddNoteBtn")?.addEventListener("click", () => {
    if (!state.activeTopic) return;
    const content = prompt(`Add note for ${state.activeTopic.title}:`);
    if (content) {
      state.data.notes = state.data.notes || [];
      state.data.notes.push({
        id: `note-${Date.now()}`,
        title: `Note: ${state.activeTopic.title}`,
        topicId: state.activeTopic.id,
        content,
        pinned: false,
        updatedAt: new Date().toISOString()
      });
      state.save();
      showToast("Note added.");
    }
  });

  // Phase Form Submit
  const phaseForm = document.getElementById("phaseForm");
  if (phaseForm) {
    phaseForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formId = document.getElementById("phaseFormId").value;
      const title = document.getElementById("phaseFormTitle").value;
      const desc = document.getElementById("phaseFormDesc").value;
      const diff = document.getElementById("phaseFormDifficulty").value;
      const hours = parseInt(document.getElementById("phaseFormHours").value);
      const tech = document.getElementById("phaseFormTech").value.split(",").map(s => s.trim()).filter(Boolean);
      const objectives = document.getElementById("phaseFormObjectives").value.split("\n").map(s => s.trim()).filter(Boolean);

      if (formId) {
        const phase = state.data.phases.find(p => p.id === formId);
        if (phase) {
          phase.title = title;
          phase.shortDescription = desc;
          phase.difficulty = diff;
          phase.estimatedHours = hours;
          phase.technologies = tech;
          phase.learningObjectives = objectives;
        }
      } else {
        const nextNum = state.data.phases.length > 0 ? Math.max(...state.data.phases.map(p => p.number)) + 1 : 0;
        state.data.phases.push({
          id: `phase-${nextNum}`,
          number: nextNum,
          title,
          shortDescription: desc,
          difficulty: diff,
          estimatedHours: hours,
          technologies: tech,
          learningObjectives: objectives,
          topics: []
        });
      }

      state.save();
      closePhaseModal();
      showToast("Phase saved.");
      renderActiveView();
    });
  }
  document.getElementById("closePhaseModalBtn")?.addEventListener("click", closePhaseModal);
  document.getElementById("cancelPhaseModalBtn")?.addEventListener("click", closePhaseModal);

  // Delete Phase inside Phase Modal
  document.getElementById("deletePhaseModalBtn")?.addEventListener("click", () => {
    const formId = document.getElementById("phaseFormId").value;
    if (!formId) return;
    const idx = state.data.phases.findIndex(p => p.id === formId);
    if (idx === -1) return;
    const phase = state.data.phases[idx];
    if (confirm(`Delete Phase ${phase.number}: "${phase.title}" and all its topics?`)) {
      state.data.phases.splice(idx, 1);
      state.save();
      closePhaseModal();
      showToast(`Phase ${phase.number} deleted.`);
      renderActiveView();
    }
  });

  // Delete Topic inside Topic Modal
  document.getElementById("deleteTopicModalBtn")?.addEventListener("click", () => {
    const phaseNum = parseInt(document.getElementById("topicFormPhaseId").value);
    const topicId = document.getElementById("topicFormId").value;
    const phase = state.data.phases.find(p => p.number === phaseNum);
    if (!phase || !phase.topics) return;
    const idx = phase.topics.findIndex(t => t.id === topicId);
    if (idx === -1) return;
    const topic = phase.topics[idx];
    if (confirm(`Delete Topic "${topic.title}"?`)) {
      phase.topics.splice(idx, 1);
      state.save();
      closeTopicEditModal();
      showToast(`Topic "${topic.title}" deleted.`);
      renderActiveView();
    }
  });

  // Delete Skill inside Skill Modal
  document.getElementById("deleteSkillModalBtn")?.addEventListener("click", () => {
    const id = document.getElementById("skillFormId").value;
    if (!id) return;
    const idx = state.data.skills.findIndex(s => s.id === id);
    if (idx === -1) return;
    const skill = state.data.skills[idx];
    if (confirm(`Delete skill "${skill.name}"?`)) {
      state.data.skills.splice(idx, 1);
      state.save();
      closeSkillModal();
      showToast(`Skill "${skill.name}" deleted.`);
      renderActiveView();
    }
  });

  // Delete Technology inside Tech Modal
  document.getElementById("deleteTechModalBtn")?.addEventListener("click", () => {
    const id = document.getElementById("techFormId").value;
    if (!id) return;
    const idx = state.data.technologies.findIndex(t => t.id === id);
    if (idx === -1) return;
    const tech = state.data.technologies[idx];
    if (confirm(`Delete technology "${tech.name}"?`)) {
      state.data.technologies.splice(idx, 1);
      state.save();
      closeTechModal();
      showToast(`Technology "${tech.name}" deleted.`);
      renderActiveView();
    }
  });

  // Delete Readiness Criterion inside Readiness Modal
  document.getElementById("deleteReadinessModalBtn")?.addEventListener("click", () => {
    const catIdx = parseInt(document.getElementById("readinessFormCategory").value);
    const itemId = document.getElementById("readinessFormItemId").value;
    const category = state.data.jobReadinessChecklist[catIdx];
    if (!category || !itemId) return;
    const idx = category.items.findIndex(i => i.id === itemId);
    if (idx === -1) return;
    if (confirm(`Delete criterion "${category.items[idx].text}"?`)) {
      category.items.splice(idx, 1);
      state.save();
      closeReadinessModal();
      showToast("Criterion deleted.");
      renderActiveView();
    }
  });

  // Quick Edit button inside Topic Details Drawer
  document.getElementById("modalEditTopicContentBtn")?.addEventListener("click", () => {
    if (state.activePhaseId !== null && state.activeTopic) {
      const pNum = state.activePhaseId;
      const tId = state.activeTopic.id;
      closeTopicModal();
      openTopicEditModal(pNum, tId);
    }
  });

  // Topic Form Submit
  const topicForm = document.getElementById("topicForm");
  if (topicForm) {
    topicForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const phaseNum = parseInt(document.getElementById("topicFormPhaseId").value);
      const topicId = document.getElementById("topicFormId").value;
      const phase = state.data.phases.find(p => p.number === phaseNum);
      if (!phase) return;

      const title = document.getElementById("topicFormTitle").value;
      const subtopics = document.getElementById("topicFormSubtopics").value.split(",").map(s => s.trim()).filter(Boolean);
      const whatIsIt = document.getElementById("topicFormWhat").value;
      const whyDoWeNeedIt = document.getElementById("topicFormWhy").value;
      const whenToUseIt = document.getElementById("topicFormWhen").value;
      const codeExample = document.getElementById("topicFormCode").value;
      const commonMistakes = document.getElementById("topicFormMistakes").value;
      const miniExercise = document.getElementById("topicFormExercise").value;

      if (topicId) {
        const t = phase.topics.find(top => top.id === topicId);
        if (t) {
          t.title = title;
          t.subtopics = subtopics;
          t.whatIsIt = whatIsIt;
          t.whyDoWeNeedIt = whyDoWeNeedIt;
          t.whenToUseIt = whenToUseIt;
          t.codeExample = codeExample;
          t.commonMistakes = commonMistakes;
          t.miniExercise = miniExercise;
        }
      } else {
        phase.topics = phase.topics || [];
        phase.topics.push({
          id: `p${phaseNum}-t${Date.now().toString().slice(-4)}`,
          title,
          subtopics,
          whatIsIt,
          whyDoWeNeedIt,
          whenToUseIt,
          codeExample,
          commonMistakes,
          miniExercise,
          status: "not-started",
          reviewStatus: "none",
          difficulty: "Beginner",
          estimatedHours: 4,
          checklist: [
            { text: "Understand concept", completed: false },
            { text: "Write practice code", completed: false }
          ]
        });
      }

      state.save();
      closeTopicEditModal();
      showToast("Topic saved.");
      renderActiveView();
    });
  }
  document.getElementById("closeEditTopicModalBtn")?.addEventListener("click", closeTopicEditModal);
  document.getElementById("cancelEditTopicModalBtn")?.addEventListener("click", closeTopicEditModal);

  // Skill Form Submit
  const skillForm = document.getElementById("skillForm");
  if (skillForm) {
    skillForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = document.getElementById("skillFormId").value;
      const name = document.getElementById("skillFormName").value;
      const category = document.getElementById("skillFormCategory").value;
      const level = document.getElementById("skillFormLevel").value;
      const progress = parseInt(document.getElementById("skillFormProgress").value) || 0;

      if (id) {
        const sk = state.data.skills.find(s => s.id === id);
        if (sk) {
          sk.name = name;
          sk.category = category;
          sk.level = level;
          sk.progress = progress;
        }
      } else {
        state.data.skills = state.data.skills || [];
        state.data.skills.push({
          id: `sk-${Date.now()}`,
          name,
          category,
          level,
          progress
        });
      }

      state.save();
      closeSkillModal();
      showToast("Skill saved.");
      renderActiveView();
    });
  }
  document.getElementById("closeSkillModalBtn")?.addEventListener("click", closeSkillModal);
  document.getElementById("cancelSkillModalBtn")?.addEventListener("click", closeSkillModal);

  // Tech Form Submit
  const techForm = document.getElementById("techForm");
  if (techForm) {
    techForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = document.getElementById("techFormId").value;
      const name = document.getElementById("techFormName").value;
      const category = document.getElementById("techFormCategory").value;
      const status = document.getElementById("techFormStatus").value;
      const progress = parseInt(document.getElementById("techFormProgress").value) || 0;
      const note = document.getElementById("techFormNote").value;

      if (id) {
        const tc = state.data.technologies.find(t => t.id === id);
        if (tc) {
          tc.name = name;
          tc.category = category;
          tc.status = status;
          tc.progress = progress;
          tc.note = note;
        }
      } else {
        state.data.technologies = state.data.technologies || [];
        state.data.technologies.push({
          id: `tech-${Date.now()}`,
          name,
          category,
          status,
          progress,
          note
        });
      }

      state.save();
      closeTechModal();
      showToast("Technology saved.");
      renderActiveView();
    });
  }
  document.getElementById("closeTechModalBtn")?.addEventListener("click", closeTechModal);
  document.getElementById("cancelTechModalBtn")?.addEventListener("click", closeTechModal);

  // Readiness Form Submit
  const readinessForm = document.getElementById("readinessForm");
  if (readinessForm) {
    readinessForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const catIdx = parseInt(document.getElementById("readinessFormCategory").value);
      const itemId = document.getElementById("readinessFormItemId").value;
      const text = document.getElementById("readinessFormText").value;
      const category = state.data.jobReadinessChecklist[catIdx];
      if (!category) return;

      if (itemId) {
        const item = category.items.find(i => i.id === itemId);
        if (item) item.text = text;
      } else {
        category.items.push({
          id: `jr-${Date.now()}`,
          text,
          completed: false
        });
      }

      state.save();
      closeReadinessModal();
      showToast("Criterion saved.");
      renderActiveView();
    });
  }
  document.getElementById("closeReadinessModalBtn")?.addEventListener("click", closeReadinessModal);
  document.getElementById("cancelReadinessModalBtn")?.addEventListener("click", closeReadinessModal);

  // Project Repo Link Form Submit
  const projectRepoForm = document.getElementById("projectRepoForm");
  if (projectRepoForm) {
    projectRepoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const projId = document.getElementById("projectRepoFormId").value;
      const url = document.getElementById("projectRepoUrl").value.trim();
      const deployStatus = document.getElementById("projectDeploymentStatus").value.trim();
      const project = state.data.projects.find(p => p.id === projId);
      if (project) {
        project.githubUrl = url;
        project.deploymentStatus = deployStatus || (url ? "Repository Linked" : "Not Deployed");
        state.save();
        closeProjectRepoModal();
        showToast(`Updated repository for ${project.title}`);
        renderActiveView();
      }
    });
  }
  document.getElementById("closeProjectRepoModalBtn")?.addEventListener("click", closeProjectRepoModal);
  document.getElementById("cancelProjectRepoModalBtn")?.addEventListener("click", closeProjectRepoModal);
}

function performGlobalSearch(query) {
  const container = document.getElementById("mainContainer");
  const results = [];

  state.data.phases.forEach(p => {
    if (p.title.toLowerCase().includes(query) || (p.shortDescription && p.shortDescription.toLowerCase().includes(query))) {
      results.push({ type: "Phase", title: `Phase ${p.number}: ${p.title}`, phaseNumber: p.number, item: p });
    }
    if (p.topics) {
      p.topics.forEach(t => {
        if (t.title.toLowerCase().includes(query) || (t.whatIsIt && t.whatIsIt.toLowerCase().includes(query))) {
          results.push({ type: "Topic", title: t.title, phaseNumber: p.number, topicId: t.id, item: t });
        }
      });
    }
  });

  state.data.projects.forEach(proj => {
    if (proj.title.toLowerCase().includes(query) || proj.description.toLowerCase().includes(query)) {
      results.push({ type: "Project", title: proj.title, item: proj });
    }
  });

  container.innerHTML = `
    <header class="page-header">
      <h1 class="page-title">Search Results</h1>
      <p class="page-description">Showing results for "${escapeHtml(query)}" (${results.length} matches found)</p>
    </header>

    ${results.length === 0 ? `
      <div class="empty-state">
        <h2 class="empty-state-title">No matching items found</h2>
        <p class="empty-state-text">Try searching for keywords like "async", "JWT", "LINQ", "EF Core", or "Angular".</p>
      </div>
    ` : `
      <div class="phase-list">
        ${results.map(r => `
          <div style="padding: 12px 16px; background-color: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
            <div>
              <span class="status-badge in-progress" style="margin-bottom: 4px;">${r.type}</span>
              <h3 style="font-size: 0.9375rem; font-weight: 600; color: var(--text-primary);">${escapeHtml(r.title)}</h3>
            </div>
            ${r.type === "Topic" ? `
              <button class="btn-secondary btn-sm search-jump-topic" data-phase="${r.phaseNumber}" data-topic="${r.topicId}">View Topic</button>
            ` : r.type === "Phase" ? `
              <button class="btn-secondary btn-sm search-jump-phase" data-phase="${r.phaseNumber}">Go to Phase</button>
            ` : `
              <button class="btn-secondary btn-sm search-jump-project">Go to Projects</button>
            `}
          </div>
        `).join("")}
      </div>
    `}
  `;

  container.querySelectorAll(".search-jump-topic").forEach(btn => {
    btn.addEventListener("click", () => {
      const pNum = parseInt(btn.getAttribute("data-phase"));
      const tId = btn.getAttribute("data-topic");
      openTopicModal(pNum, tId);
    });
  });

  container.querySelectorAll(".search-jump-phase").forEach(btn => {
    btn.addEventListener("click", () => {
      navigateTo("roadmap");
    });
  });

  container.querySelectorAll(".search-jump-project").forEach(btn => {
    btn.addEventListener("click", () => {
      navigateTo("projects");
    });
  });
}

// Start application when DOM is ready or immediately if already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
