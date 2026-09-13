// Storage and persistence service
// Abstracts data operations so it can be swapped for an ASP.NET Core Web API client in the future.

const initialData = (typeof window !== "undefined" && window.initialRoadmapData)
  ? window.initialRoadmapData
  : (typeof initialRoadmapData !== "undefined" ? initialRoadmapData : {});

const STORAGE_KEY = "junior_dotnet_roadmap_v2";
const BACKUP_KEY = "junior_dotnet_roadmap_backup_v2";

class RoadmapStorageService {
  constructor() {
    this.storageKey = STORAGE_KEY;
    this.backupKey = BACKUP_KEY;
  }

  // Load data from localStorage or fallback to seed data
  load() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) {
        this.save(initialData);
        return JSON.parse(JSON.stringify(initialData));
      }
      const parsed = JSON.parse(raw);
      // Ensure essential structures exist
      if (!parsed.phases) parsed.phases = initialData.phases || [];
      if (!parsed.projects) parsed.projects = initialData.projects || [];
      if (!parsed.skills) parsed.skills = initialData.skills || [];
      if (!parsed.technologies) parsed.technologies = initialData.technologies || [];
      if (!parsed.interviewQuestions) parsed.interviewQuestions = initialData.interviewQuestions || [];
      if (!parsed.jobReadinessChecklist) parsed.jobReadinessChecklist = initialData.jobReadinessChecklist || [];
      if (!parsed.notes) parsed.notes = initialData.notes || [];
      if (!parsed.resources) parsed.resources = initialData.resources || [];
      if (!parsed.studyPlan) parsed.studyPlan = initialData.studyPlan || { weeklyTargetHours: 18, dailyTargetHours: 2.5, currentGoal: "Master Junior .NET Skills", streakDays: 1, studyLogs: [] };
      if (!parsed.studyPlan.studyLogs) parsed.studyPlan.studyLogs = [];
      if (!parsed.archive) parsed.archive = { phases: [], topics: [], projects: [] };
      return parsed;
    } catch (err) {
      console.error("Failed to load roadmap data from localStorage:", err);
      return JSON.parse(JSON.stringify(initialData));
    }
  }

  // Persist updated data object
  save(data) {
    try {
      data.meta = data.meta || {};
      data.meta.lastUpdated = new Date().toISOString();
      localStorage.setItem(this.storageKey, JSON.stringify(data));
      return true;
    } catch (err) {
      console.error("Failed to persist roadmap data to localStorage:", err);
      return false;
    }
  }

  // Export current state as a JSON string file
  exportJson(data) {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const dateStr = new Date().toISOString().split("T")[0];
    a.href = url;
    a.download = `dotnet-learning-roadmap-backup-${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Import JSON string into application state
  importJson(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed.phases || !Array.isArray(parsed.phases)) {
        throw new Error("Invalid roadmap JSON schema: missing 'phases' array.");
      }
      this.save(parsed);
      return { success: true, data: parsed };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  // Create an in-browser snapshot backup
  createBackup(data) {
    try {
      localStorage.setItem(this.backupKey, JSON.stringify(data));
      return true;
    } catch (err) {
      console.error("Failed to create snapshot backup:", err);
      return false;
    }
  }

  // Restore snapshot backup
  restoreBackup() {
    try {
      const raw = localStorage.getItem(this.backupKey);
      if (!raw) return { success: false, error: "No local snapshot backup found." };
      const parsed = JSON.parse(raw);
      this.save(parsed);
      return { success: true, data: parsed };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  // Reset state to default initial seed data
  reset() {
    this.createBackup(this.load());
    this.save(initialData);
    return JSON.parse(JSON.stringify(initialData));
  }
}

const storageService = new RoadmapStorageService();

if (typeof window !== "undefined") {
  window.storageService = storageService;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { storageService, RoadmapStorageService };
}
