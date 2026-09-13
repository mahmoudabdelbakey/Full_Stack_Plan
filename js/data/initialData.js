// Initial seed data for the Junior Full Stack .NET Developer Learning Roadmap

const initialRoadmapData = {
  "meta": {
    "title": "Junior Full Stack .NET Developer Roadmap",
    "targetRole": "Junior / Fresh Full Stack .NET Developer",
    "version": "1.0.0",
    "lastUpdated": "2026-09-13T13:03:10.441Z"
  },
  "studyPlan": {
    "weeklyTargetHours": 18,
    "dailyTargetHours": 2.5,
    "currentGoal": "Begin Phase 0: Programming Foundation and core syntax fundamentals.",
    "streakDays": 0,
    "studyLogs": []
  },
  "phases": [
    {
      "id": "phase-0",
      "number": 0,
      "title": "Programming Foundation",
      "shortDescription": "Core computer programming constructs before diving deeply into the C# ecosystem.",
      "difficulty": "Beginner",
      "estimatedHours": 25,
      "technologies": [
        "C#",
        "Console",
        "Visual Studio / VS Code"
      ],
      "prerequisites": [],
      "learningObjectives": [
        "Understand computer memory, variables, and primitive storage.",
        "Master boolean logic and conditional execution branching.",
        "Write iterative loops with proper boundary checks.",
        "Deconstruct code into reusable methods with parameters and return types.",
        "Use Visual Studio debugger effectively (breakpoints, watch, call stack)."
      ],
      "topics": [
        {
          "id": "p0-t1",
          "title": "Variables and Data Types",
          "subtopics": [
            "Declaration",
            "Initialization",
            "Memory allocation basics",
            "Variable naming conventions"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 3,
          "difficulty": "Beginner",
          "whatIsIt": "A variable is a named memory location used to store data that can change during program execution. A data type specifies the kind of data the variable can hold.",
          "whyDoWeNeedIt": "Programs need to store, track, and manipulate user inputs, calculation results, and runtime states in memory safely.",
          "whenToUseIt": "Use whenever you need to capture or compute a value that will be referenced later in your code.",
          "codeExample": "// Declaration and initialization\nint userAge = 22;\nstring developerName = \"Alex\";\nbool isRegistered = true;\ndouble accountBalance = 1540.50;\n\nConsole.WriteLine($\"Developer: {developerName}, Age: {userAge}\");",
          "commonMistakes": "Using variables before initializing them, using string when numeric operations are needed, and not adhering to camelCase conventions.",
          "miniExercise": "Declare variables representing a product name, price, quantity in stock, and tax rate. Calculate total cost with tax.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Understand difference between declaration and initialization",
              "completed": false
            },
            {
              "text": "Know primary data types (int, double, bool, string, char)",
              "completed": false
            },
            {
              "text": "Write clean variable names following C# conventions",
              "completed": false
            }
          ]
        },
        {
          "id": "p0-t2",
          "title": "Operators and Expressions",
          "subtopics": [
            "Arithmetic operators",
            "Comparison operators",
            "Logical operators",
            "Operator precedence"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 3,
          "difficulty": "Beginner",
          "whatIsIt": "Symbols that tell the runtime to perform specific mathematical, relational, or logical evaluations on values (operands).",
          "whyDoWeNeedIt": "Calculations, comparisons, and conditional validations require precise operators to evaluate rules.",
          "whenToUseIt": "Use arithmetic operators for math (+, -, *, /, %), comparison for testing conditions (==, !=, <, >), and logical operators for combining conditions (&&, ||, !).",
          "codeExample": "int score = 85;\nbool hasPassed = score >= 60;\nbool isHonorStudent = hasPassed && score >= 90;\n\nint remainder = 10 % 3; // 1",
          "commonMistakes": "Confusing assignment operator '=' with equality operator '==', and integer division truncation (e.g. 5 / 2 yields 2).",
          "miniExercise": "Write a program that takes an integer and checks if it is both even and greater than 50.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Master arithmetic operations including modulus",
              "completed": false
            },
            {
              "text": "Understand short-circuit evaluation in && and ||",
              "completed": false
            },
            {
              "text": "Avoid integer division truncation bugs",
              "completed": false
            }
          ]
        },
        {
          "id": "p0-t3",
          "title": "Conditions and Branching",
          "subtopics": [
            "if",
            "else",
            "else if",
            "switch statement",
            "switch expressions"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 4,
          "difficulty": "Beginner",
          "whatIsIt": "Control flow structures that execute specific blocks of code depending on whether a boolean expression evaluates to true or false.",
          "whyDoWeNeedIt": "Real software must make decisions based on user input, system status, or calculation outcomes.",
          "whenToUseIt": "Use if/else for ranges and dynamic conditions; use switch when matching a single expression against discrete constant values.",
          "codeExample": "int orderStatus = 2;\nstring statusText = orderStatus switch\n{\n    1 => \"Pending\",\n    2 => \"Processing\",\n    3 => \"Shipped\",\n    _ => \"Unknown\"\n};\nConsole.WriteLine($\"Order Status: {statusText}\");",
          "commonMistakes": "Missing break or default in legacy switch blocks, deeply nested if statements instead of guard clauses.",
          "miniExercise": "Build an evaluation method that converts a numeric exam grade (0-100) into letter grades (A, B, C, D, F) with validation.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Use if, else if, else properly",
              "completed": false
            },
            {
              "text": "Write clean switch statements and switch expressions",
              "completed": false
            },
            {
              "text": "Refactor deeply nested conditions into guard clauses",
              "completed": false
            }
          ]
        },
        {
          "id": "p0-t4",
          "title": "Loops and Iteration",
          "subtopics": [
            "for loop",
            "while loop",
            "do while loop",
            "foreach loop",
            "break and continue"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 4,
          "difficulty": "Beginner",
          "whatIsIt": "Structures that repeat a code block multiple times while a condition holds true or over elements of a sequence.",
          "whyDoWeNeedIt": "To process sequences, calculate aggregates, retry operations, and automate repetitive tasks without duplicate code.",
          "whenToUseIt": "Use for when iteration count is known; while when looping depends on condition; foreach when iterating over collections.",
          "codeExample": "// For loop with counter\nfor (int i = 1; i <= 5; i++)\n{\n    if (i == 3) continue;\n    Console.WriteLine($\"Index: {i}\");\n}",
          "commonMistakes": "Off-by-one errors (<= vs <), creating unintentional infinite loops by forgetting to increment iteration variables.",
          "miniExercise": "Print all prime numbers between 1 and 100 using nested loops.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Master for, while, and do-while loops",
              "completed": false
            },
            {
              "text": "Understand break vs continue",
              "completed": false
            },
            {
              "text": "Recognize and prevent infinite loops",
              "completed": false
            }
          ]
        },
        {
          "id": "p0-t5",
          "title": "Methods and Scope",
          "subtopics": [
            "Parameters",
            "Arguments",
            "Return types",
            "void",
            "Variable scope",
            "Method overloading"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 4,
          "difficulty": "Beginner",
          "whatIsIt": "A method is a contained block of code that performs a specific operation, accepts input parameters, and optionally returns a value.",
          "whyDoWeNeedIt": "Enforces DRY (Don't Repeat Yourself), improves readability, isolates logic, and makes programs testable.",
          "whenToUseIt": "Extract logic into a method whenever a calculation or workflow is repeated or has a single clear responsibility.",
          "codeExample": "int Add(int a, int b)\n{\n    return a + b;\n}\n\nvoid LogMessage(string message)\n{\n    Console.WriteLine($\"[LOG]: {message}\");\n}",
          "commonMistakes": "Methods doing too many unrelated tasks, modifying outer state unintentionally, forgetting return statements.",
          "miniExercise": "Create a method CalculateDiscount(decimal price, decimal percentage) that validates inputs and returns discounted price.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Declare methods with clear return types",
              "completed": false
            },
            {
              "text": "Distinguish between parameters and arguments",
              "completed": false
            },
            {
              "text": "Understand local variable scope and lifetime",
              "completed": false
            }
          ]
        },
        {
          "id": "p0-t6",
          "title": "Arrays",
          "subtopics": [
            "Array declaration",
            "Zero-based indexing",
            "Length property",
            "Iterating arrays",
            "Searching and updating"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 3,
          "difficulty": "Beginner",
          "whatIsIt": "A fixed-size, contiguous sequential collection of elements of the same data type stored in memory.",
          "whyDoWeNeedIt": "To group multiple related values together under a single identifier without declaring separate variables.",
          "whenToUseIt": "Use when the total number of items is known in advance and remains fixed throughout execution.",
          "codeExample": "int[] numbers = new int[] { 10, 20, 30, 40 };\nnumbers[1] = 25; // update second element\n\nfor (int i = 0; i < numbers.Length; i++)\n{\n    Console.WriteLine(numbers[i]);\n}",
          "commonMistakes": "IndexOutOfRangeException by accessing index equal to or greater than Length.",
          "miniExercise": "Write a program to find the maximum, minimum, and average value in an array of integers.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Allocate and initialize single-dimensional arrays",
              "completed": false
            },
            {
              "text": "Iterate using indices and foreach",
              "completed": false
            },
            {
              "text": "Handle array boundary limits safely",
              "completed": false
            }
          ]
        },
        {
          "id": "p0-t7",
          "title": "Basic Debugging Skills",
          "subtopics": [
            "Breakpoints",
            "Step Over (F10)",
            "Step Into (F11)",
            "Step Out",
            "Watch Window",
            "Locals Window",
            "Call Stack"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 4,
          "difficulty": "Beginner",
          "whatIsIt": "The systematic process of executing code step by step using an IDE debugger to inspect state, flow, and locate faults.",
          "whyDoWeNeedIt": "Printing values with Console.WriteLine is slow and insufficient for complex bugs; debuggers show live memory and call sequence.",
          "whenToUseIt": "Whenever code produces unexpected results, crashes, or when tracing unfamiliar code paths.",
          "codeExample": "// Set a breakpoint on the line below in Visual Studio\nint total = 0;\nfor (int i = 0; i < 5; i++)\n{\n    total += i; // Inspect 'total' and 'i' in Locals window\n}",
          "commonMistakes": "Stepping through without watching specific variables, ignoring the Call Stack during exceptions.",
          "miniExercise": "Place breakpoints in a nested loop and inspect how inner variables change using Watch expressions.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Place and disable conditional breakpoints",
              "completed": false
            },
            {
              "text": "Navigate execution flow with Step Over and Step Into",
              "completed": false
            },
            {
              "text": "Inspect variables in Locals and Watch panels",
              "completed": false
            },
            {
              "text": "Read the Call Stack to trace execution origins",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p0-e1",
          "title": "Gradebook Calculator",
          "description": "Read student test scores into an array, calculate letter grades, high, low, and average.",
          "completed": false
        },
        {
          "id": "p0-e2",
          "title": "Banking Console Simulator",
          "description": "Build a console menu allowing deposit, withdraw, balance inquiry with input validation.",
          "completed": false
        }
      ],
      "notes": "Programming foundation gives the structural habits needed for OOP and clean C# code.",
      "resources": [
        {
          "id": "p0-r1",
          "title": "Microsoft Learn: C# for Beginners",
          "url": "https://learn.microsoft.com/en-us/shows/csharp-fundamentals-for-beginners/",
          "type": "Course"
        }
      ]
    },
    {
      "id": "phase-1",
      "number": 1,
      "title": "C# Fundamentals",
      "shortDescription": "Type system, memory semantics (stack vs heap), string manipulation, collections, and error handling.",
      "difficulty": "Beginner",
      "estimatedHours": 35,
      "technologies": [
        "C#",
        ".NET Runtime",
        "CLR"
      ],
      "prerequisites": [
        "phase-0"
      ],
      "learningObjectives": [
        "Distinguish value types from reference types in stack and heap memory.",
        "Perform type conversions safely using TryParse and explicit casting.",
        "Handle nullable types and null reference avoidance techniques.",
        "Manipulate strings efficiently using StringBuilder.",
        "Select correct generic collections (List, Dictionary, HashSet, Queue, Stack).",
        "Implement robust exception handling using try, catch, finally, and custom exceptions."
      ],
      "topics": [
        {
          "id": "p1-t1",
          "title": "Value Types vs Reference Types",
          "subtopics": [
            "Stack memory",
            "Heap memory",
            "struct vs class",
            "Pass by value vs reference",
            "Nullable value types"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Beginner",
          "whatIsIt": "Value types store data directly in stack memory (e.g. int, bool, struct). Reference types store memory pointers on the stack pointing to objects on the heap (e.g. string, class, array).",
          "whyDoWeNeedIt": "Understanding memory layout prevents unexpected side effects when passing parameters and optimizes performance.",
          "whenToUseIt": "Use value types for small immutable data; use reference types for complex entities with identity and lifecycle.",
          "codeExample": "int a = 10;\nint b = a; // Copy of value\nb = 20; // 'a' remains 10\n\nint? nullableAge = null; // Nullable value type\nif (nullableAge.HasValue)\n{\n    Console.WriteLine(nullableAge.Value);\n}",
          "commonMistakes": "Assuming changing an object passed to a method does not affect the caller; forgetting that strings are immutable reference types.",
          "miniExercise": "Demonstrate in code that modifying an integer inside a method does not alter caller value, while modifying a class object does.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Explain stack allocation vs heap allocation",
              "completed": false
            },
            {
              "text": "Use nullable value types with Nullable<T> or ?",
              "completed": false
            },
            {
              "text": "Understand boxing and unboxing performance implications",
              "completed": false
            }
          ]
        },
        {
          "id": "p1-t2",
          "title": "Type Conversion and Parsing",
          "subtopics": [
            "Implicit casting",
            "Explicit casting",
            "int.Parse",
            "int.TryParse",
            "Convert class"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 4,
          "difficulty": "Beginner",
          "whatIsIt": "Techniques for converting data stored in one data type into an equivalent representation in another data type.",
          "whyDoWeNeedIt": "User inputs and network requests arrive as raw strings. They must be validated and converted to numeric or date types safely.",
          "whenToUseIt": "Always prefer TryParse over Parse for user input to prevent unhandled FormatException runtime crashes.",
          "codeExample": "string rawInput = \"142\";\nif (int.TryParse(rawInput, out int parsedValue))\n{\n    Console.WriteLine($\"Valid number: {parsedValue}\");\n}\nelse\n{\n    Console.WriteLine(\"Invalid integer input.\");\n}",
          "commonMistakes": "Using int.Parse on user input without try-catch, causing unexpected application crashes.",
          "miniExercise": "Write a safe input reader that prompts until the user enters a valid decimal salary greater than zero.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Apply implicit and explicit numeric casting",
              "completed": false
            },
            {
              "text": "Use TryParse with out variables safely",
              "completed": false
            },
            {
              "text": "Explain why TryParse is faster than catching Parse exceptions",
              "completed": false
            }
          ]
        },
        {
          "id": "p1-t3",
          "title": "String Operations and StringBuilder",
          "subtopics": [
            "String immutability",
            "String interpolation ($)",
            "Substring, Split, Join",
            "StringBuilder for loops"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 4,
          "difficulty": "Beginner",
          "whatIsIt": "Strings are immutable sequences of Unicode characters. StringBuilder is a mutable buffer for high-frequency string building.",
          "whyDoWeNeedIt": "Concatenating strings inside loops creates temporary string instances on the heap, triggering excessive garbage collection.",
          "whenToUseIt": "Use string interpolation for a few values; use StringBuilder when joining strings inside repetitive loops.",
          "codeExample": "using System.Text;\n\nvar sb = new StringBuilder();\nfor (int i = 0; i < 1000; i++)\n{\n    sb.Append(\"Item \").Append(i).AppendLine();\n}\nstring finalReport = sb.ToString();",
          "commonMistakes": "Using '+' concatenation inside large loops instead of StringBuilder.",
          "miniExercise": "Parse a CSV line string with customer details into an array of trimmed, validated strings.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Explain string immutability and memory allocation",
              "completed": false
            },
            {
              "text": "Use string interpolation and format specifiers",
              "completed": false
            },
            {
              "text": "Use StringBuilder in loops to avoid GC pressure",
              "completed": false
            }
          ]
        },
        {
          "id": "p1-t4",
          "title": "Generic Collections",
          "subtopics": [
            "List<T>",
            "Dictionary<TKey, TValue>",
            "HashSet<T>",
            "Queue<T>",
            "Stack<T>",
            "Big-O search lookup"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Beginner",
          "whatIsIt": "Type-safe, dynamically sized data structures provided in System.Collections.Generic.",
          "whyDoWeNeedIt": "Fixed arrays are inflexible for business data that grows or shrinks dynamically during runtime.",
          "whenToUseIt": "Use List<T> for ordered lists; Dictionary<TKey,TValue> for key lookup (O(1)); HashSet<T> for uniqueness; Queue for FIFO; Stack for LIFO.",
          "codeExample": "// Fast O(1) lookup by key\nvar studentAges = new Dictionary<string, int>();\nstudentAges[\"Mona\"] = 23;\nstudentAges[\"Omar\"] = 25;\n\nif (studentAges.TryGetValue(\"Mona\", out int age))\n{\n    Console.WriteLine($\"Mona is {age} years old.\");\n}",
          "commonMistakes": "Using List.Contains in large loops instead of HashSet, leading to O(N^2) performance slowdowns.",
          "miniExercise": "Implement an in-memory word frequency counter using Dictionary<string, int> that ignores casing.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Choose appropriate collection based on use case",
              "completed": false
            },
            {
              "text": "Safely retrieve dictionary values with TryGetValue",
              "completed": false
            },
            {
              "text": "Understand lookup differences between List, Dictionary, and HashSet",
              "completed": false
            }
          ]
        },
        {
          "id": "p1-t5",
          "title": "Generics",
          "subtopics": [
            "Generic types",
            "Generic methods",
            "Generic constraints (where T : class, struct, new())"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Intermediate",
          "whatIsIt": "Language feature allowing classes, interfaces, and methods to be defined with type placeholders (T) without specifying the exact type until instantiation.",
          "whyDoWeNeedIt": "Enables code reuse with maximum type safety and eliminates boxing/unboxing overhead found in non-generic collections.",
          "whenToUseIt": "Use when creating reusable data structures, repositories, API response envelopes, or utility helpers.",
          "codeExample": "public class ApiResponse<T>\n{\n    public bool Success { get; set; }\n    public T? Data { get; set; }\n    public string? ErrorMessage { get; set; }\n}",
          "commonMistakes": "Writing repetitive duplicate classes for different types instead of using a generic type parameter.",
          "miniExercise": "Create a generic method Swap<T>(ref T a, ref T b) and test it with both integers and strings.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Define generic classes and generic methods",
              "completed": false
            },
            {
              "text": "Apply generic constraints (where T : class)",
              "completed": false
            },
            {
              "text": "Explain type safety advantages over object",
              "completed": false
            }
          ]
        },
        {
          "id": "p1-t6",
          "title": "Exception Handling",
          "subtopics": [
            "try block",
            "catch block",
            "finally block",
            "throw vs throw ex",
            "Custom exceptions",
            "Exception filters"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Intermediate",
          "whatIsIt": "Structured mechanism for detecting and recovering from runtime errors and exceptional conditions.",
          "whyDoWeNeedIt": "Prevents abrupt application termination, logs error details, and allows graceful recovery or informative user messages.",
          "whenToUseIt": "Wrap code that touches external systems (I/O, database, network) or parse operations prone to external failures.",
          "codeExample": "try\n{\n    int result = 10 / int.Parse(\"0\");\n}\ncatch (DivideByZeroException ex)\n{\n    Console.WriteLine($\"Math error: {ex.Message}\");\n}\ncatch (Exception ex)\n{\n    Console.WriteLine($\"Unexpected error: {ex.Message}\");\n    throw; // Preserves original stack trace\n}\nfinally\n{\n    Console.WriteLine(\"Cleanup executed.\");\n}",
          "commonMistakes": "Catching general Exception and ignoring it (swallowing exceptions), using 'throw ex' which truncates the stack trace.",
          "miniExercise": "Create a custom InvalidAgeException and throw it when a method receives negative age input.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Use specific catch blocks before general catch",
              "completed": false
            },
            {
              "text": "Understand why 'throw' is preferred over 'throw ex'",
              "completed": false
            },
            {
              "text": "Use finally block to release critical unmanaged resources",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p1-e1",
          "title": "Inventory Catalog using Dictionary",
          "description": "Build an inventory tracker that maps SKU strings to product info and calculates totals.",
          "completed": false
        },
        {
          "id": "p1-e2",
          "title": "Safe File Reader with Try-Catch",
          "description": "Read integers from a text file, validate formatting, catch missing file errors gracefully.",
          "completed": false
        }
      ],
      "notes": "Deep understanding of C# memory and collections is essential for writing high-performance EF Core and ASP.NET Core applications.",
      "resources": [
        {
          "id": "p1-r1",
          "title": "C# Type System Overview",
          "url": "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/",
          "type": "Documentation"
        }
      ]
    },
    {
      "id": "phase-2",
      "number": 2,
      "title": "Object-Oriented Programming (OOP)",
      "shortDescription": "Classes, encapsulation, inheritance, polymorphism, abstraction, interfaces, and SOLID principles.",
      "difficulty": "Intermediate",
      "estimatedHours": 40,
      "technologies": [
        "C#",
        "OOP",
        "SOLID"
      ],
      "prerequisites": [
        "phase-1"
      ],
      "learningObjectives": [
        "Model real-world business domains using classes, objects, and properties.",
        "Enforce encapsulation with access modifiers and validation in property setters.",
        "Leverage inheritance and composition effectively.",
        "Implement polymorphism with virtual, override, and interfaces.",
        "Design maintainable, decoupled systems following SOLID principles."
      ],
      "topics": [
        {
          "id": "p2-t1",
          "title": "Classes, Objects, Fields, and Properties",
          "subtopics": [
            "Class definition",
            "Instantiating objects",
            "Fields vs Properties",
            "Auto-properties",
            "Encapsulation with accessors"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Beginner",
          "whatIsIt": "A class is a blueprint defining fields, properties, and methods. An object is a concrete instance of that class allocated on the heap.",
          "whyDoWeNeedIt": "Provides structure and bundles data with the operations that act on that data.",
          "whenToUseIt": "Whenever modeling domain concepts such as Student, Account, Order, or Product.",
          "codeExample": "public class BankAccount\n{\n    private decimal _balance;\n\n    public string AccountNumber { get; }\n    public decimal Balance => _balance;\n\n    public BankAccount(string accountNumber, decimal initialBalance)\n    {\n        AccountNumber = accountNumber;\n        _balance = initialBalance > 0 ? initialBalance : 0;\n    }\n\n    public void Deposit(decimal amount)\n    {\n        if (amount <= 0) throw new ArgumentException(\"Must be positive.\");\n        _balance += amount;\n    }\n}",
          "commonMistakes": "Making fields public instead of exposing controlled properties, violating encapsulation.",
          "miniExercise": "Design a Product class with Name, Price, and StockQuantity properties where Price cannot be set to a negative value.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Protect internal class state using private fields",
              "completed": false
            },
            {
              "text": "Implement read-only auto-properties",
              "completed": false
            },
            {
              "text": "Add validation inside property setters or methods",
              "completed": false
            }
          ]
        },
        {
          "id": "p2-t2",
          "title": "Constructors and Overloading",
          "subtopics": [
            "Default constructors",
            "Parameterized constructors",
            "Constructor chaining with this()",
            "Constructor overloading"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 4,
          "difficulty": "Beginner",
          "whatIsIt": "Special methods executed automatically during object creation to initialize fields and enforce valid initial state.",
          "whyDoWeNeedIt": "Ensures an object cannot exist in an invalid or half-initialized state.",
          "whenToUseIt": "In any class requiring mandatory dependencies, identifiers, or configuration values.",
          "codeExample": "public class User\n{\n    public string Username { get; }\n    public string Role { get; }\n\n    public User(string username) : this(username, \"Customer\") {}\n\n    public User(string username, string role)\n    {\n        Username = username;\n        Role = role;\n    }\n}",
          "commonMistakes": "Writing duplicate initialization logic across multiple constructors instead of chaining with this().",
          "miniExercise": "Build an Employee class with chained constructors handling different combinations of hire date and department.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Define parameterized constructors for mandatory data",
              "completed": false
            },
            {
              "text": "Chain constructors using this() syntax",
              "completed": false
            },
            {
              "text": "Understand implicit parameterless constructor behavior",
              "completed": false
            }
          ]
        },
        {
          "id": "p2-t3",
          "title": "Inheritance and Polymorphism",
          "subtopics": [
            "Base class vs derived class",
            "protected modifier",
            "virtual and override",
            "base keyword",
            "Method overriding vs overloading"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Intermediate",
          "whatIsIt": "Inheritance allows a child class to inherit members from a parent class. Polymorphism allows derived classes to provide their own specific implementation of base methods.",
          "whyDoWeNeedIt": "Promotes code reuse for 'is-a' relationships and enables uniform handling of diverse derived objects through a common base reference.",
          "whenToUseIt": "When multiple types share common attributes and behaviors with specialized variations (e.g. Employee -> Manager, FullTimeEmployee).",
          "codeExample": "public abstract class Payment\n{\n    public decimal Amount { get; set; }\n    public abstract void Process();\n}\n\npublic class CreditCardPayment : Payment\n{\n    public override void Process()\n    {\n        Console.WriteLine($\"Charging {Amount:C} to credit card.\");\n    }\n}",
          "commonMistakes": "Using inheritance when composition is more appropriate ('has-a' vs 'is-a'), forgetting the override keyword.",
          "miniExercise": "Create a Shape hierarchy (Circle, Rectangle) with a virtual CalculateArea() method implemented differently by each.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Use protected access modifier in class hierarchies",
              "completed": false
            },
            {
              "text": "Implement virtual and override methods",
              "completed": false
            },
            {
              "text": "Call base class constructors and methods using base",
              "completed": false
            }
          ]
        },
        {
          "id": "p2-t4",
          "title": "Abstraction and Interfaces",
          "subtopics": [
            "abstract classes",
            "abstract methods",
            "Interface definition",
            "Implementing multiple interfaces",
            "Interface vs Abstract Class"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Intermediate",
          "whatIsIt": "Abstraction hides implementation complexity and exposes only essential contracts. Interfaces define pure behavioral contracts with no state.",
          "whyDoWeNeedIt": "Essential for loose coupling, unit test mocking, and dependency injection in modern ASP.NET Core.",
          "whenToUseIt": "Use interfaces to define contracts that multiple unrelated classes can fulfill (e.g. IRepository, INotificationService).",
          "codeExample": "public interface INotificationService\n{\n    void Send(string recipient, string message);\n}\n\npublic class EmailNotificationService : INotificationService\n{\n    public void Send(string recipient, string message)\n    {\n        Console.WriteLine($\"Emailing {recipient}: {message}\");\n    }\n}",
          "commonMistakes": "Coupling concrete classes directly instead of relying on interfaces, breaking testability.",
          "miniExercise": "Design an IPaymentGateway interface with Stripe and PayPal implementations.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Declare clear interfaces with semantic naming (I-prefix)",
              "completed": false
            },
            {
              "text": "Implement multiple interfaces on a single class",
              "completed": false
            },
            {
              "text": "Articulate when to choose an interface vs an abstract class",
              "completed": false
            }
          ]
        },
        {
          "id": "p2-t5",
          "title": "Composition vs Inheritance",
          "subtopics": [
            "Favor composition over inheritance",
            "Has-a relationships",
            "Delegation pattern",
            "Fragile base class problem"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Intermediate",
          "whatIsIt": "Composition builds complex types by combining objects ('has-a') rather than inheriting behavior through deep class hierarchies ('is-a').",
          "whyDoWeNeedIt": "Deep inheritance trees are rigid, fragile, and difficult to test and refactor.",
          "whenToUseIt": "Whenever sharing functionality between classes that do not naturally belong to the same taxonomic family.",
          "codeExample": "public class Car\n{\n    private readonly Engine _engine;\n    public Car(Engine engine) => _engine = engine;\n    public void Start() => _engine.Ignite();\n}",
          "commonMistakes": "Creating 5-level deep inheritance trees to share one or two utility methods.",
          "miniExercise": "Refactor a deep inheritance tree into a composed structure with injected helper components.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Identify fragile base class anti-patterns",
              "completed": false
            },
            {
              "text": "Design types using component composition",
              "completed": false
            },
            {
              "text": "Demonstrate ease of unit testing composed classes",
              "completed": false
            }
          ]
        },
        {
          "id": "p2-t6",
          "title": "SOLID Principles",
          "subtopics": [
            "Single Responsibility",
            "Open/Closed",
            "Liskov Substitution",
            "Interface Segregation",
            "Dependency Inversion"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 10,
          "difficulty": "Intermediate",
          "whatIsIt": "Five fundamental design principles for building understandable, flexible, and maintainable software systems.",
          "whyDoWeNeedIt": "Prevents code rot, makes additions painless without modifying existing tested code, and enables robust enterprise architecture.",
          "whenToUseIt": "Apply continuously when designing classes, services, controllers, and domain models.",
          "codeExample": "// Dependency Inversion Principle:\n// High-level module depends on abstraction, not concrete class\npublic class OrderProcessor\n{\n    private readonly INotificationService _notifier;\n    public OrderProcessor(INotificationService notifier)\n    {\n        _notifier = notifier;\n    }\n}",
          "commonMistakes": "Creating 'God classes' that handle validation, database queries, and email sending all at once (violating SRP).",
          "miniExercise": "Take a bloated OrderManager class and refactor it into separate classes fulfilling each SOLID rule.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Apply SRP: one reason for a class to change",
              "completed": false
            },
            {
              "text": "Apply OCP: extend behavior with interfaces without editing old code",
              "completed": false
            },
            {
              "text": "Apply LSP: derived types must be substitutable for base types",
              "completed": false
            },
            {
              "text": "Apply ISP: client should not depend on interfaces it does not use",
              "completed": false
            },
            {
              "text": "Apply DIP: depend upon abstractions, not concretions",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p2-e1",
          "title": "RPG Battle Simulator",
          "description": "Design Hero, Monster, Weapon, and Spell classes with polymorphism and interfaces.",
          "completed": false
        },
        {
          "id": "p2-e2",
          "title": "Refactoring to SOLID",
          "description": "Take a monolithic monolithic invoice generator and split into SRP classes with DIP.",
          "completed": false
        }
      ],
      "notes": "SOLID and clean OOP are tested in virtually every Junior .NET technical interview.",
      "resources": [
        {
          "id": "p2-r1",
          "title": "SOLID Principles in C# with Examples",
          "url": "https://www.c-sharpcorner.com/article/solid-principles-in-c-sharp/",
          "type": "Article"
        }
      ]
    },
    {
      "id": "phase-3",
      "number": 3,
      "title": "Advanced C#",
      "shortDescription": "Delegates, lambda expressions, LINQ foundations, async/await, Task-based asynchronous pattern.",
      "difficulty": "Intermediate",
      "estimatedHours": 35,
      "technologies": [
        "C#",
        "TAP",
        "Threading",
        "Tasks"
      ],
      "prerequisites": [
        "phase-2"
      ],
      "learningObjectives": [
        "Understand delegates as type-safe function pointers.",
        "Master built-in generic delegates: Action, Func, and Predicate.",
        "Write concise expressions using Lambda syntax and closures.",
        "Understand non-blocking asynchronous programming with async, await, and Task.",
        "Handle cancellation tokens and avoid UI/thread-pool blocking anti-patterns."
      ],
      "topics": [
        {
          "id": "p3-t1",
          "title": "Delegates and Built-in Types",
          "subtopics": [
            "Custom delegates",
            "Action<T>",
            "Func<T, TResult>",
            "Predicate<T>",
            "Multicast delegates"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Intermediate",
          "whatIsIt": "A delegate is a type-safe reference pointing to a method with a specific signature and return type.",
          "whyDoWeNeedIt": "Allows passing methods as arguments, handling events, and designing customizable algorithm steps.",
          "whenToUseIt": "Use Action when returning void, Func when returning a value, and Predicate when returning a bool condition.",
          "codeExample": "Func<int, int, int> add = (x, y) => x + y;\nAction<string> log = msg => Console.WriteLine($\"[INFO] {msg}\");\nPredicate<int> isAdult = age => age >= 18;\n\nlog($\"Sum: {add(5, 10)}\");\nlog($\"Is adult: {isAdult(20)}\");",
          "commonMistakes": "Declaring custom delegate types when standard Func or Action already meets requirements.",
          "miniExercise": "Create a custom filter method that takes a List<int> and a Predicate<int> to return matching numbers.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Distinguish between Action and Func signatures",
              "completed": false
            },
            {
              "text": "Pass methods and lambdas into higher-order functions",
              "completed": false
            },
            {
              "text": "Understand how LINQ query methods rely on Func",
              "completed": false
            }
          ]
        },
        {
          "id": "p3-t2",
          "title": "Lambda Expressions and Closures",
          "subtopics": [
            "Expression lambdas",
            "Statement lambdas",
            "Variable captures (closures)",
            "Anonymous functions"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Intermediate",
          "whatIsIt": "Concise syntax for writing inline anonymous methods without needing a separate named method declaration.",
          "whyDoWeNeedIt": "Makes collection filtering, transformations, and event listeners clean and readable in place.",
          "whenToUseIt": "In LINQ clauses (Where, Select), event subscriptions, and callback parameters.",
          "codeExample": "var names = new List<string> { \"Sami\", \"Karim\", \"Sara\", \"Nour\" };\nvar sNames = names.FindAll(n => n.StartsWith(\"S\"));",
          "commonMistakes": "Capturing loop variables improperly in closures inside multi-threaded code.",
          "miniExercise": "Write a lambda expression that computes tax based on varying country codes.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Write concise lambda expressions with (input) => expression",
              "completed": false
            },
            {
              "text": "Understand captured variables and closure lifetime",
              "completed": false
            }
          ]
        },
        {
          "id": "p3-t3",
          "title": "Asynchronous Programming with async & await",
          "subtopics": [
            "Synchronous vs Asynchronous",
            "Task and Task<T>",
            "async keyword",
            "await keyword",
            "Thread pool yield"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 12,
          "difficulty": "Intermediate",
          "whatIsIt": "A language construct enabling non-blocking execution while waiting for long-running I/O operations (network, disk, database).",
          "whyDoWeNeedIt": "In Web APIs, blocking threads exhausts the thread pool and cripples throughput. Async frees threads to handle other requests while waiting.",
          "whenToUseIt": "Use for all I/O-bound operations (database queries, HTTP calls, reading files).",
          "codeExample": "public async Task<string> FetchUserDataAsync(int userId)\n{\n    using var client = new HttpClient();\n    string json = await client.GetStringAsync($\"https://api.example.com/users/{userId}\");\n    return json;\n}",
          "commonMistakes": "Calling '.Result' or '.Wait()' which causes deadlocks and thread pool starvation; writing 'async void' outside event handlers.",
          "miniExercise": "Write an asynchronous method that simulates downloading three files concurrently with Task.WhenAll.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Use async Task and async Task<T> return types",
              "completed": false
            },
            {
              "text": "Avoid 'async void' in backend development",
              "completed": false
            },
            {
              "text": "Never call .Result or .Wait() synchronously",
              "completed": false
            }
          ]
        },
        {
          "id": "p3-t4",
          "title": "CancellationToken and Concurrency Basics",
          "subtopics": [
            "CancellationTokenSource",
            "Passing CancellationToken to I/O",
            "Task.WhenAll vs Task.WhenAny",
            "Thread safety"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Advanced",
          "whatIsIt": "Standard mechanism for cooperatively signaling that an asynchronous operation should abort when the client disconnects or times out.",
          "whyDoWeNeedIt": "Stops wasteful database queries and computation if the browser cancels the HTTP request or closes the connection.",
          "whenToUseIt": "Pass CancellationToken through all controller actions down into EF Core async queries.",
          "codeExample": "public async Task LongOperationAsync(CancellationToken cancellationToken)\n{\n    for (int i = 0; i < 10; i++)\n    {\n        cancellationToken.ThrowIfCancellationRequested();\n        await Task.Delay(500, cancellationToken);\n    }\n}",
          "commonMistakes": "Ignoring cancellation tokens in repository and service methods.",
          "miniExercise": "Simulate an operation that automatically times out after 2 seconds using CancellationTokenSource(2000).",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Accept CancellationToken in async method signatures",
              "completed": false
            },
            {
              "text": "Handle OperationCanceledException cleanly",
              "completed": false
            },
            {
              "text": "Execute multiple tasks concurrently with Task.WhenAll",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p3-e1",
          "title": "Concurrent Data Scraper",
          "description": "Download data from three simulated endpoints concurrently and aggregate results.",
          "completed": false
        },
        {
          "id": "p3-e2",
          "title": "Custom LINQ Filter Engine",
          "description": "Build a filtering extension method using Func<T, bool> expressions.",
          "completed": false
        }
      ],
      "notes": "Asynchronous programming is the foundation of high-throughput ASP.NET Core Web APIs.",
      "resources": [
        {
          "id": "p3-r1",
          "title": "Async Guidance in ASP.NET Core",
          "url": "https://github.com/davidfowl/AspNetCoreDiagnosticScenarios/blob/master/AsyncGuidance.md",
          "type": "Documentation"
        }
      ]
    },
    {
      "id": "phase-4",
      "number": 4,
      "title": "SQL Server",
      "shortDescription": "Relational database concepts, schema, constraints, CRUD, joins, aggregations, views, procedures, and indexes.",
      "difficulty": "Intermediate",
      "estimatedHours": 35,
      "technologies": [
        "SQL Server",
        "T-SQL",
        "SSMS"
      ],
      "prerequisites": [
        "phase-0"
      ],
      "learningObjectives": [
        "Create normalized database tables with primary keys, foreign keys, and constraints.",
        "Write precise SELECT queries filtering with WHERE, IN, LIKE, and ORDER BY.",
        "Aggregate data using GROUP BY and HAVING.",
        "Join relational tables using INNER, LEFT, RIGHT, and FULL joins.",
        "Write Stored Procedures, Views, and understand Clustered vs Non-Clustered Indexes."
      ],
      "topics": [
        {
          "id": "p4-t1",
          "title": "Database Tables and Constraints",
          "subtopics": [
            "Databases & Tables",
            "Primary Key",
            "Foreign Key",
            "NOT NULL, UNIQUE, CHECK, DEFAULT",
            "Data types"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Beginner",
          "whatIsIt": "Tables store structured records with typed columns. Constraints enforce business rules and data integrity directly at the storage engine level.",
          "whyDoWeNeedIt": "Garbage data in the database breaks application logic. Constraints guarantee invalid records cannot be saved.",
          "whenToUseIt": "In all relational schema definitions for entities like Users, Orders, and Products.",
          "codeExample": "CREATE TABLE Customers (\n    Id INT IDENTITY(1,1) PRIMARY KEY,\n    Email NVARCHAR(150) NOT NULL UNIQUE,\n    FullName NVARCHAR(100) NOT NULL,\n    Age INT CHECK (Age >= 18),\n    CreatedAt DATETIME2 DEFAULT GETUTCDATE()\n);",
          "commonMistakes": "Failing to add foreign key constraints, leaving tables orphaned and prone to relational corruption.",
          "miniExercise": "Create a Products table with constraints for Positive Price, Unique SKU, and Default Stock of 0.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Define primary keys with IDENTITY auto-increment",
              "completed": false
            },
            {
              "text": "Enforce relationships with FOREIGN KEY references",
              "completed": false
            },
            {
              "text": "Add CHECK and UNIQUE constraints",
              "completed": false
            }
          ]
        },
        {
          "id": "p4-t2",
          "title": "Data Manipulation: CRUD Operations",
          "subtopics": [
            "SELECT",
            "INSERT INTO",
            "UPDATE with WHERE",
            "DELETE with WHERE",
            "Filtering with AND, OR, IN, BETWEEN, LIKE"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Beginner",
          "whatIsIt": "The foundational T-SQL queries for reading, inserting, modifying, and deleting records in tables.",
          "whyDoWeNeedIt": "Every dynamic application fundamentally reads and writes database records.",
          "whenToUseIt": "Directly in SQL scripts, stored procedures, and when inspecting tables in SSMS.",
          "codeExample": "INSERT INTO Customers (Email, FullName, Age)\nVALUES ('user@example.com', 'Tamer Ali', 28);\n\nUPDATE Customers\nSET Age = 29\nWHERE Email = 'user@example.com';\n\nSELECT Id, FullName, Email FROM Customers\nWHERE Age BETWEEN 20 AND 30\nORDER BY FullName ASC;",
          "commonMistakes": "Running UPDATE or DELETE without a WHERE clause, modifying or wiping out the entire table.",
          "miniExercise": "Write queries to insert 3 customers, update one email, and select customers whose name starts with 'A'.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Write safe UPDATE and DELETE with explicit WHERE",
              "completed": false
            },
            {
              "text": "Filter using IN, BETWEEN, and wildcards with LIKE",
              "completed": false
            },
            {
              "text": "Sort result sets using ORDER BY ASC/DESC",
              "completed": false
            }
          ]
        },
        {
          "id": "p4-t3",
          "title": "Aggregations and Grouping",
          "subtopics": [
            "COUNT, SUM, AVG, MIN, MAX",
            "GROUP BY",
            "HAVING vs WHERE",
            "NULL handling in aggregates"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Intermediate",
          "whatIsIt": "Aggregate functions compute a single summary value across rows. GROUP BY partitions rows into groups for summary calculation.",
          "whyDoWeNeedIt": "Business reports (total sales per category, average order value, customer counts) require fast aggregation.",
          "whenToUseIt": "Use WHERE to filter individual rows before aggregation; use HAVING to filter aggregated groups after grouping.",
          "codeExample": "SELECT CategoryId, COUNT(*) AS TotalProducts, AVG(Price) AS AvgPrice\nFROM Products\nWHERE IsActive = 1\nGROUP BY CategoryId\nHAVING COUNT(*) >= 5;",
          "commonMistakes": "Attempting to filter aggregated values inside the WHERE clause instead of the HAVING clause.",
          "miniExercise": "Calculate total revenue and order count per customer, showing only customers with over $500 in sales.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Calculate counts, sums, and averages across groups",
              "completed": false
            },
            {
              "text": "Distinguish between WHERE (row filter) and HAVING (group filter)",
              "completed": false
            }
          ]
        },
        {
          "id": "p4-t4",
          "title": "Table Joins",
          "subtopics": [
            "INNER JOIN",
            "LEFT (OUTER) JOIN",
            "RIGHT JOIN",
            "FULL OUTER JOIN",
            "Self joins",
            "Multi-table joins"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Intermediate",
          "whatIsIt": "Operations that combine rows from two or more tables based on a related column between them (foreign keys).",
          "whyDoWeNeedIt": "Relational normalization separates data into distinct tables; queries recombine them to present complete views.",
          "whenToUseIt": "Use INNER JOIN when matching records must exist on both sides; LEFT JOIN when parent records must appear even if no child exists.",
          "codeExample": "SELECT O.Id AS OrderId, C.FullName, O.OrderDate, O.TotalAmount\nFROM Orders O\nINNER JOIN Customers C ON O.CustomerId = C.Id\nWHERE O.TotalAmount > 100;",
          "commonMistakes": "Using INNER JOIN when records with no children should still be displayed, causing missing data.",
          "miniExercise": "Query all customers and their orders, ensuring customers with zero orders still appear with NULL order data.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Understand INNER vs LEFT vs RIGHT JOIN",
              "completed": false
            },
            {
              "text": "Join 3+ related tables in a single query cleanly",
              "completed": false
            },
            {
              "text": "Inspect execution plans for expensive table scans",
              "completed": false
            }
          ]
        },
        {
          "id": "p4-t5",
          "title": "Indexes and Performance Basics",
          "subtopics": [
            "Clustered Index",
            "Non-Clustered Index",
            "Table Scan vs Index Seek",
            "Index on Foreign Keys",
            "Composite Indexes"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Advanced",
          "whatIsIt": "Data structures (B-trees) that speed up data retrieval operations on a table at the cost of additional storage and slower writes.",
          "whyDoWeNeedIt": "Without indexes, searching for a row requires scanning millions of rows sequentially, causing database bottlenecks.",
          "whenToUseIt": "Create non-clustered indexes on columns frequently used in WHERE filters, JOIN conditions, and ORDER BY clauses.",
          "codeExample": "CREATE NONCLUSTERED INDEX IX_Orders_CustomerId_OrderDate\nON Orders (CustomerId, OrderDate DESC)\nINCLUDE (TotalAmount);",
          "commonMistakes": "Over-indexing every single column, which degrades INSERT and UPDATE performance.",
          "miniExercise": "Compare query performance in SSMS using Client Statistics before and after creating a targeted index.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Explain difference between Clustered and Non-Clustered index",
              "completed": false
            },
            {
              "text": "Identify Index Seek vs Table Scan in Execution Plans",
              "completed": false
            },
            {
              "text": "Index foreign keys to accelerate JOIN performance",
              "completed": false
            }
          ]
        },
        {
          "id": "p4-t6",
          "title": "Transactions and ACID Properties",
          "subtopics": [
            "Atomicity, Consistency, Isolation, Durability",
            "BEGIN TRANSACTION",
            "COMMIT",
            "ROLLBACK",
            "TRY...CATCH in T-SQL"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Intermediate",
          "whatIsIt": "A unit of work where multiple database modifications must either all succeed or all be completely rolled back.",
          "whyDoWeNeedIt": "Prevents partial updates (e.g. money deducted from Account A but crashing before reaching Account B).",
          "whenToUseIt": "Any workflow where two or more tables must stay synchronized (orders + inventory deduction + invoice).",
          "codeExample": "BEGIN TRY\n    BEGIN TRANSACTION;\n    UPDATE Accounts SET Balance = Balance - 100 WHERE Id = 1;\n    UPDATE Accounts SET Balance = Balance + 100 WHERE Id = 2;\n    COMMIT TRANSACTION;\nEND TRY\nBEGIN CATCH\n    IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;\n    THROW;\nEND CATCH;",
          "commonMistakes": "Leaving transactions open without committing or rolling back, locking tables and blocking all other queries.",
          "miniExercise": "Write a transactional script to place an order and decrement product stock, rolling back if stock is insufficient.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Explain each ACID principle in simple words",
              "completed": false
            },
            {
              "text": "Write transaction blocks with BEGIN, COMMIT, and ROLLBACK",
              "completed": false
            },
            {
              "text": "Wrap transactions inside TRY...CATCH to handle failures",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p4-e1",
          "title": "E-Commerce Reporting Queries",
          "description": "Write 10 complex queries with multi-table joins, subqueries, and grouping for sales metrics.",
          "completed": false
        },
        {
          "id": "p4-e2",
          "title": "Banking Fund Transfer Procedure",
          "description": "Write a stored procedure transferring funds safely with transactions and balance checks.",
          "completed": false
        }
      ],
      "notes": "Junior developers are frequently asked SQL queries and join questions in technical interviews.",
      "resources": [
        {
          "id": "p4-r1",
          "title": "SQL Server Tutorial for Beginners",
          "url": "https://www.sqlservertutorial.net/",
          "type": "Tutorial"
        }
      ]
    },
    {
      "id": "phase-5",
      "number": 5,
      "title": "Database Design",
      "shortDescription": "Requirements gathering, ERD modeling, normalization (1NF, 2NF, 3NF), and relationship cardinality.",
      "difficulty": "Intermediate",
      "estimatedHours": 25,
      "technologies": [
        "ERD Tools",
        "Relational Schema",
        "Draw.io / dbdiagram.io"
      ],
      "prerequisites": [
        "phase-4"
      ],
      "learningObjectives": [
        "Analyze business requirements and extract entities, attributes, and relationships.",
        "Model One-to-One, One-to-Many, and Many-to-Many relationships with junction tables.",
        "Normalize schemas to 3rd Normal Form to eliminate data anomalies and redundancy.",
        "Draw clean, accurate Entity Relationship Diagrams (ERD).",
        "Avoid common database design anti-patterns."
      ],
      "topics": [
        {
          "id": "p5-t1",
          "title": "Requirements Analysis and Entity Modeling",
          "subtopics": [
            "Identifying nouns (Entities) and verbs (Actions)",
            "Primary and alternate keys",
            "Defining attributes and nullable constraints"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Beginner",
          "whatIsIt": "The methodical translation of written client requirements into formal entity structures with appropriate data attributes.",
          "whyDoWeNeedIt": "A flawed database schema forces convoluted backend application code and causes data corruption.",
          "whenToUseIt": "At the inception of every feature, module, or application before writing a single line of backend code.",
          "codeExample": "Requirement: \"Students enroll in courses. Each enrollment records a grade and enrollment date.\"\n\nEntities:\n- Student (Id, Name, Email)\n- Course (Id, Title, Credits)\n- Enrollment (StudentId, CourseId, EnrolledAt, Grade)",
          "commonMistakes": "Putting multiple pieces of data into a single comma-separated column string instead of a separate table.",
          "miniExercise": "Analyze a requirement for an appointment scheduling clinic and extract all required entities and attributes.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Extract entities and attributes from business narratives",
              "completed": false
            },
            {
              "text": "Determine appropriate data types and nullability rules",
              "completed": false
            }
          ]
        },
        {
          "id": "p5-t2",
          "title": "Cardinality and Relationships",
          "subtopics": [
            "One-to-One (1:1)",
            "One-to-Many (1:N)",
            "Many-to-Many (M:N)",
            "Junction / Join tables",
            "Cascade delete behaviors"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 7,
          "difficulty": "Intermediate",
          "whatIsIt": "Specifies how many instances of an entity can be associated with instances of another entity.",
          "whyDoWeNeedIt": "Enforces relational constraints and ensures foreign keys correctly preserve data integrity.",
          "whenToUseIt": "Use 1:N (Foreign key on the Many side); M:N requires a junction table holding foreign keys to both parent tables.",
          "codeExample": "// Many-to-Many junction table:\nCREATE TABLE StudentCourses (\n    StudentId INT NOT NULL REFERENCES Students(Id),\n    CourseId INT NOT NULL REFERENCES Courses(Id),\n    AssignedDate DATETIME2 NOT NULL DEFAULT GETUTCDATE(),\n    PRIMARY KEY (StudentId, CourseId)\n);",
          "commonMistakes": "Attempting to represent a Many-to-Many relationship without an intermediate junction table.",
          "miniExercise": "Design the relationships between Users, Roles, and Permissions.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Model One-to-Many relationships with foreign keys",
              "completed": false
            },
            {
              "text": "Create junction tables with composite keys for Many-to-Many",
              "completed": false
            },
            {
              "text": "Configure appropriate cascade delete behaviors",
              "completed": false
            }
          ]
        },
        {
          "id": "p5-t3",
          "title": "Database Normalization (1NF, 2NF, 3NF)",
          "subtopics": [
            "Insertion, update, deletion anomalies",
            "1st Normal Form: atomic values",
            "2nd Normal Form: no partial dependencies",
            "3rd Normal Form: no transitive dependencies"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Intermediate",
          "whatIsIt": "A systematic process of structuring tables to minimize redundancy and prevent data modification anomalies.",
          "whyDoWeNeedIt": "Prevents inconsistent data states (e.g. updating an author's name in one book record while leaving it old in another).",
          "whenToUseIt": "Apply to all relational schemas up to 3NF for OLTP enterprise applications.",
          "codeExample": "// 1NF: Atomic values (No lists in a single cell)\n// 2NF: All non-key attributes depend on whole primary key\n// 3NF: No non-key attribute depends on another non-key attribute (e.g. City depends on ZipCode, so ZipCode -> City table)",
          "commonMistakes": "Storing calculated values (e.g. TotalPrice) when it can be derived from Quantity * UnitPrice, causing sync bugs.",
          "miniExercise": "Take an unnormalized invoice spreadsheet and convert it into 3NF normalized tables.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Identify and eliminate repeating groups (1NF)",
              "completed": false
            },
            {
              "text": "Eliminate partial key dependencies (2NF)",
              "completed": false
            },
            {
              "text": "Eliminate transitive non-key dependencies (3NF)",
              "completed": false
            }
          ]
        },
        {
          "id": "p5-t4",
          "title": "Entity Relationship Diagrams (ERD)",
          "subtopics": [
            "Crow's Foot notation",
            "Conceptual vs Logical vs Physical ERD",
            "Visualizing primary & foreign keys",
            "dbdiagram.io workflow"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Beginner",
          "whatIsIt": "Visual diagrammatic representation of entities, attributes, and relationships forming a database schema.",
          "whyDoWeNeedIt": "Provides an unambiguous communication tool for developers, architects, and stakeholders before coding begins.",
          "whenToUseIt": "Create an ERD before starting any backend project or when planning database migrations.",
          "codeExample": "Table Users {\n  id int [pk, increment]\n  email varchar [unique, not null]\n}\nTable Posts {\n  id int [pk, increment]\n  user_id int [ref: > Users.id]\n  title varchar\n}",
          "commonMistakes": "Skipping the ERD phase and jumping straight to coding, resulting in painful schema refactoring later.",
          "miniExercise": "Draw a complete ERD for an online food delivery application using dbdiagram.io.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Draw Crow's foot notation representing 1:1, 1:N, M:N",
              "completed": false
            },
            {
              "text": "Generate physical SQL DDL scripts from an ERD",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p5-e1",
          "title": "Hospital Management ERD",
          "description": "Design an ERD for Patients, Doctors, Appointments, Prescriptions, and Invoices in 3NF.",
          "completed": false
        }
      ],
      "notes": "Solid database design makes building EF Core entities and repository queries straightforward.",
      "resources": [
        {
          "id": "p5-r1",
          "title": "Database Normalization Explained",
          "url": "https://www.guru99.com/database-normalization.html",
          "type": "Article"
        }
      ]
    },
    {
      "id": "phase-6",
      "number": 6,
      "title": "LINQ (Language Integrated Query)",
      "shortDescription": "Declarative querying over collections and databases, deferred vs immediate execution, and projection.",
      "difficulty": "Intermediate",
      "estimatedHours": 30,
      "technologies": [
        "C#",
        "LINQ",
        "IEnumerable",
        "IQueryable"
      ],
      "prerequisites": [
        "phase-3"
      ],
      "learningObjectives": [
        "Query in-memory collections and database sets using fluent LINQ extension methods.",
        "Filter with Where, project with Select, and sort with OrderBy.",
        "Perform aggregations and groupings with GroupBy, Count, Sum, and Average.",
        "Master deferred execution vs immediate execution to avoid memory leaks.",
        "Understand differences between IEnumerable (in-memory) and IQueryable (SQL translation)."
      ],
      "topics": [
        {
          "id": "p6-t1",
          "title": "LINQ Query Syntax vs Method Syntax",
          "subtopics": [
            "Fluent extension method syntax",
            "Query comprehension syntax",
            "Where, Select, OrderBy",
            "Readability guidelines"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 4,
          "difficulty": "Beginner",
          "whatIsIt": "LINQ provides uniform syntax to query and transform data from diverse sources (collections, XML, databases) directly in C#.",
          "whyDoWeNeedIt": "Replaces verbose, error-prone nested foreach loops with readable, declarative, type-safe queries.",
          "whenToUseIt": "Use Method Syntax (fluent calls with lambdas) as the industry standard in modern .NET applications.",
          "codeExample": "var employees = GetEmployees();\n\n// Method syntax (industry standard)\nvar highEarners = employees\n    .Where(e => e.Salary > 50000 && e.IsActive)\n    .OrderByDescending(e => e.Salary)\n    .Select(e => new { e.Name, e.Department });",
          "commonMistakes": "Mixing query syntax and method syntax arbitrarily inside the same codebase.",
          "miniExercise": "Convert a 20-line nested loop filtering and sorting student records into a 3-line fluent LINQ query.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Write fluent LINQ queries with Where, Select, and OrderBy",
              "completed": false
            },
            {
              "text": "Project into anonymous types or DTOs",
              "completed": false
            }
          ]
        },
        {
          "id": "p6-t2",
          "title": "Element Operators and Quantifiers",
          "subtopics": [
            "First vs FirstOrDefault",
            "Single vs SingleOrDefault",
            "Any and All",
            "ElementAt"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Beginner",
          "whatIsIt": "Methods that retrieve individual elements or test boolean conditions across sequences.",
          "whyDoWeNeedIt": "Allows safe retrieval of records by ID and quick validation checks without scanning entire collections.",
          "whenToUseIt": "Use FirstOrDefault when 0 or 1 result is expected; use SingleOrDefault when having more than 1 result represents a data corruption error.",
          "codeExample": "var user = users.FirstOrDefault(u => u.Id == targetId);\nif (user != null)\n{\n    Console.WriteLine($\"Found {user.Email}\");\n}\n\nbool hasOverdueOrders = orders.Any(o => o.IsOverdue);\nConsole.WriteLine($\"Has overdue: {hasOverdueOrders}\");",
          "commonMistakes": "Using .First() without checking for empty collections, causing InvalidOperationException crashes.",
          "miniExercise": "Write a query that checks if all active products have positive stock, and retrieves the first out-of-stock item.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Know exact difference between First, FirstOrDefault, Single, SingleOrDefault",
              "completed": false
            },
            {
              "text": "Use Any() instead of Count() > 0 for fast boolean checks",
              "completed": false
            }
          ]
        },
        {
          "id": "p6-t3",
          "title": "Deferred vs Immediate Execution",
          "subtopics": [
            "Deferred execution behavior",
            "Immediate execution with ToList, ToArray",
            "Re-execution hazards",
            "IEnumerable vs IQueryable"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Intermediate",
          "whatIsIt": "Deferred execution means a query is not executed when defined, but only when iterated (via foreach or ToList).",
          "whyDoWeNeedIt": "Allows composing complex queries step by step; understanding it prevents running the same expensive query multiple times.",
          "whenToUseIt": "Chain filters while constructing a query; call ToListAsync() at the final moment when results are needed in memory.",
          "codeExample": "// Deferred: No database query executed yet\nvar query = dbContext.Products.Where(p => p.Price > 100);\n\nif (filterByCategory)\n    query = query.Where(p => p.CategoryId == categoryId);\n\n// Immediate execution: Single optimized SQL query generated and sent\nvar results = await query.ToListAsync();",
          "commonMistakes": "Calling ToList() too early, which pulls all records into memory and kills database server efficiency.",
          "miniExercise": "Demonstrate that modifying a collection after defining a deferred query changes the query's output upon subsequent iteration.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Explain deferred execution and yield return concepts",
              "completed": false
            },
            {
              "text": "Call ToList() or ToArray() only when materialization is required",
              "completed": false
            },
            {
              "text": "Distinguish between IEnumerable (in-memory) and IQueryable (SQL expression tree)",
              "completed": false
            }
          ]
        },
        {
          "id": "p6-t4",
          "title": "Grouping, Joining, and Advanced Projections",
          "subtopics": [
            "GroupBy",
            "GroupJoin",
            "SelectMany (flattening)",
            "Aggregates (Sum, Average, Min, Max)"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 7,
          "difficulty": "Intermediate",
          "whatIsIt": "Advanced LINQ operators for grouping items by keys, flattening nested sequences, and calculating multi-level summaries.",
          "whyDoWeNeedIt": "Constructing complex reporting payloads and flattening nested child collections into flat view models.",
          "whenToUseIt": "Use GroupBy to aggregate items (e.g. orders per month); use SelectMany to flatten lists of lists.",
          "codeExample": "var departmentSummaries = employees\n    .GroupBy(e => e.Department)\n    .Select(g => new {\n        Department = g.Key,\n        TotalStaff = g.Count(),\n        AverageSalary = g.Average(e => e.Salary)\n    });",
          "commonMistakes": "Using Select inside Select instead of SelectMany when trying to flatten child arrays.",
          "miniExercise": "Group a list of customer transactions by month and compute monthly sum and transaction count.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Group objects by single and composite keys",
              "completed": false
            },
            {
              "text": "Flatten nested collections using SelectMany",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p6-e1",
          "title": "Flight Booking Query Engine",
          "description": "Filter, sort, and paginate flight itineraries using fluent LINQ operators.",
          "completed": false
        }
      ],
      "notes": "LINQ fluency is the prerequisite for mastering Entity Framework Core without writing inefficient database queries.",
      "resources": [
        {
          "id": "p6-r1",
          "title": "101 LINQ Samples",
          "url": "https://github.com/dotnet/try-samples/tree/main/101-linq-samples",
          "type": "Documentation"
        }
      ]
    },
    {
      "id": "phase-7",
      "number": 7,
      "title": "Entity Framework Core (EF Core)",
      "shortDescription": "Object-Relational Mapping (ORM), DbContext, Migrations, CRUD, tracking vs no-tracking, navigation properties.",
      "difficulty": "Intermediate",
      "estimatedHours": 45,
      "technologies": [
        "EF Core",
        "SQL Server",
        ".NET CLI",
        "Migrations"
      ],
      "prerequisites": [
        "phase-2",
        "phase-4",
        "phase-6"
      ],
      "learningObjectives": [
        "Understand the ORM concept and how EF Core bridges C# classes and SQL tables.",
        "Configure DbContext, DbSet, and connection strings.",
        "Model entity relationships using Data Annotations and Fluent API.",
        "Generate and apply database migrations safely.",
        "Execute async CRUD operations (Add, Update, Remove, SaveChangesAsync).",
        "Master eager loading (Include/ThenInclude), AsNoTracking(), and projection performance."
      ],
      "topics": [
        {
          "id": "p7-t1",
          "title": "ORM Concepts and DbContext",
          "subtopics": [
            "What is an ORM?",
            "EF Core vs ADO.NET vs Dapper",
            "DbContext responsibility",
            "DbSet<TEntity>",
            "Configuring connection strings"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Beginner",
          "whatIsIt": "An Object-Relational Mapper (ORM) maps database tables to C# classes and translates LINQ queries into raw SQL commands.",
          "whyDoWeNeedIt": "Eliminates repetitive manual ADO.NET boilerplate (opening connections, reading SqlDataReader rows, parameter mapping).",
          "whenToUseIt": "Use EF Core as the primary data access layer for standard CRUD and business logic in ASP.NET Core applications.",
          "codeExample": "public class ApplicationDbContext : DbContext\n{\n    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)\n        : base(options) {}\n\n    public DbSet<Product> Products => Set<Product>();\n    public DbSet<Category> Categories => Set<Category>();\n}",
          "commonMistakes": "Instantiating DbContext manually with 'new' instead of registering it via ASP.NET Core Dependency Injection.",
          "miniExercise": "Configure an ApplicationDbContext class with two entities and register it in Program.cs with SQL Server.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Explain how EF Core translates C# objects to relational rows",
              "completed": false
            },
            {
              "text": "Configure DbContextOptions with UseSqlServer()",
              "completed": false
            }
          ]
        },
        {
          "id": "p7-t2",
          "title": "Entity Configuration and Relationships",
          "subtopics": [
            "Data Annotations ([Key], [Required], [MaxLength])",
            "Fluent API in OnModelCreating",
            "One-to-Many",
            "Many-to-Many",
            "Navigation properties"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Intermediate",
          "whatIsIt": "Specifying how C# classes and properties map to SQL schema, column constraints, primary keys, and foreign keys.",
          "whyDoWeNeedIt": "Fluent API provides clean separation of database mappings from domain entity classes.",
          "whenToUseIt": "Use Data Annotations for simple constraints; prefer Fluent API (IEntityTypeConfiguration) for complex relations.",
          "codeExample": "public class OrderConfiguration : IEntityTypeConfiguration<Order>\n{\n    public void Configure(EntityTypeBuilder<Order> builder)\n    {\n        builder.HasKey(o => o.Id);\n        builder.Property(o => o.TotalAmount).HasPrecision(18, 2);\n        builder.HasOne(o => o.Customer)\n               .WithMany(c => c.Orders)\n               .HasForeignKey(o => o.CustomerId)\n               .OnDelete(DeleteBehavior.Restrict);\n    }\n}",
          "commonMistakes": "Forgetting navigation properties, or configuring relationships inconsistently between parent and child.",
          "miniExercise": "Configure a Many-to-Many relationship between Student and Course with a custom Enrollment junction entity using Fluent API.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Configure primary and composite keys with Fluent API",
              "completed": false
            },
            {
              "text": "Model One-to-Many and Many-to-Many with HasMany and WithOne",
              "completed": false
            },
            {
              "text": "Implement IEntityTypeConfiguration<T> for clean configuration",
              "completed": false
            }
          ]
        },
        {
          "id": "p7-t3",
          "title": "EF Core Migrations Workflow",
          "subtopics": [
            "dotnet ef migrations add",
            "dotnet ef database update",
            "Migration history table (_EFMigrationsHistory)",
            "Script-Migration for production"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Intermediate",
          "whatIsIt": "A version-control system for database schema that creates C# migration files reflecting changes made to domain entities.",
          "whyDoWeNeedIt": "Allows automated, repeatable database schema changes across developer machines and production environments.",
          "whenToUseIt": "Whenever adding, modifying, or removing entity properties or relationships.",
          "codeExample": "# Add migration via terminal\ndotnet ef migrations add InitialCreate\n\n# Apply to SQL database\ndotnet ef database update\n\n# Generate SQL script for production DB deployment\ndotnet ef migrations script",
          "commonMistakes": "Manually editing the SQL database schema directly instead of generating migrations, causing model desynchronization.",
          "miniExercise": "Add a new column 'DiscountRate' to an entity, generate a migration, inspect generated C# code, and update the database.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Install and run dotnet-ef global CLI tool",
              "completed": false
            },
            {
              "text": "Create and inspect migration Up() and Down() methods",
              "completed": false
            },
            {
              "text": "Generate idempotent SQL migration scripts for production deployments",
              "completed": false
            }
          ]
        },
        {
          "id": "p7-t4",
          "title": "Async CRUD Operations and Change Tracker",
          "subtopics": [
            "AddAsync",
            "Update and Remove",
            "SaveChangesAsync",
            "ChangeTracker states (Added, Modified, Deleted, Unchanged)"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Intermediate",
          "whatIsIt": "Methods to insert, update, and delete entities, coupled with EF Core's internal ChangeTracker that monitors entity modifications.",
          "whyDoWeNeedIt": "Ensures database modifications are queued up and committed together in an atomic transaction during SaveChangesAsync.",
          "whenToUseIt": "In application service and repository layers handling business transactions.",
          "codeExample": "// Adding a new entity\nvar product = new Product { Name = \"Keyboard\", Price = 45.00m };\nawait _context.Products.AddAsync(product);\nawait _context.SaveChangesAsync(); // Generates INSERT and updates product.Id\n\n// Updating\nproduct.Price = 40.00m;\nawait _context.SaveChangesAsync(); // Generates targeted UPDATE",
          "commonMistakes": "Calling SaveChangesAsync() multiple times inside a loop instead of calling it once after processing all items.",
          "miniExercise": "Write a method that loads an order, adds two order items, updates total amount, and saves in a single transaction.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Always use async EF Core methods (SaveChangesAsync, FirstOrDefaultAsync)",
              "completed": false
            },
            {
              "text": "Understand entity states in ChangeTracker",
              "completed": false
            }
          ]
        },
        {
          "id": "p7-t5",
          "title": "Query Performance: Tracking, Eager Loading, and Projection",
          "subtopics": [
            "AsNoTracking()",
            "Eager loading (Include, ThenInclude)",
            "Explicit loading",
            "Projection with Select (avoiding N+1)",
            "N+1 query problem"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 10,
          "difficulty": "Advanced",
          "whatIsIt": "Techniques for optimizing EF Core database queries to fetch only required columns and avoid executing hundreds of hidden queries.",
          "whyDoWeNeedIt": "Neglecting performance causes high latency, excessive memory usage, and the notorious N+1 query problem.",
          "whenToUseIt": "Always use AsNoTracking() for read-only queries; use Select() projection to fetch only needed fields directly from SQL.",
          "codeExample": "// Optimized read-only projection:\n// Queries only 2 columns in SQL, zero entity tracking overhead\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .Select(p => new ProductDto {\n        Id = p.Id,\n        Name = p.Name\n    })\n    .ToListAsync();",
          "commonMistakes": "Fetching full entity graphs into memory just to display two fields on an API endpoint.",
          "miniExercise": "Identify an N+1 query bug caused by lazy loading in a loop and fix it using Include() and DTO projection.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Apply AsNoTracking() on all read-only queries",
              "completed": false
            },
            {
              "text": "Load child relations with Include and ThenInclude",
              "completed": false
            },
            {
              "text": "Eliminate N+1 queries by projecting directly to DTOs using Select",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p7-e1",
          "title": "Complete EF Core Blog Engine",
          "description": "Create DbContext, Users, Posts, Tags (M:N), and Comments with migrations and CRUD methods.",
          "completed": false
        }
      ],
      "notes": "EF Core mastery is the core differentiator between a beginner and a capable Junior .NET developer.",
      "resources": [
        {
          "id": "p7-r1",
          "title": "EF Core Official Documentation",
          "url": "https://learn.microsoft.com/en-us/ef/core/",
          "type": "Documentation"
        }
      ]
    },
    {
      "id": "phase-8",
      "number": 8,
      "title": "Web Fundamentals & REST",
      "shortDescription": "Client-Server model, HTTP request/response anatomy, headers, status codes, JSON, and REST architectural constraints.",
      "difficulty": "Beginner",
      "estimatedHours": 20,
      "technologies": [
        "HTTP/1.1",
        "HTTP/2",
        "JSON",
        "REST"
      ],
      "prerequisites": [
        "phase-0"
      ],
      "learningObjectives": [
        "Understand the client-server request and response cycle.",
        "Master HTTP verbs: GET, POST, PUT, PATCH, DELETE and their idempotency.",
        "Apply standard HTTP status codes (200, 201, 204, 400, 401, 403, 404, 409, 500).",
        "Inspect and construct HTTP headers (Content-Type, Authorization).",
        "Design clean RESTful resource URIs."
      ],
      "topics": [
        {
          "id": "p8-t1",
          "title": "HTTP Request and Response Cycle",
          "subtopics": [
            "Client vs Server",
            "URL and Endpoint anatomy",
            "Request headers & body",
            "Response status & body",
            "DNS and TCP handshake overview"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 4,
          "difficulty": "Beginner",
          "whatIsIt": "The foundational application-layer protocol governing data exchange across the World Wide Web.",
          "whyDoWeNeedIt": "All modern web frontends (Angular, React, mobile) communicate with backend APIs via HTTP.",
          "whenToUseIt": "Underlies every API call and web asset transmission.",
          "codeExample": "HTTP Request:\nPOST /api/products HTTP/1.1\nHost: api.store.com\nContent-Type: application/json\nAuthorization: Bearer <token>\n\n{\n  \"name\": \"Mechanical Keyboard\",\n  \"price\": 89.99\n}",
          "commonMistakes": "Sending sensitive data in query string parameters instead of encrypted request bodies.",
          "miniExercise": "Use browser DevTools Network tab to inspect headers and payloads of an active website.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Break down URL parts: scheme, host, port, path, query string",
              "completed": false
            },
            {
              "text": "Inspect request and response headers in DevTools",
              "completed": false
            }
          ]
        },
        {
          "id": "p8-t2",
          "title": "HTTP Verbs and Idempotency",
          "subtopics": [
            "GET (safe, idempotent)",
            "POST (unsafe, non-idempotent)",
            "PUT (replace full resource)",
            "PATCH (partial update)",
            "DELETE (idempotent)"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Beginner",
          "whatIsIt": "Standardized methods indicating the desired action to be performed on a given resource.",
          "whyDoWeNeedIt": "Ensures predictability, cacheability, and adherence to web architecture conventions.",
          "whenToUseIt": "Use GET to read, POST to create, PUT to replace entirely, PATCH to update specific fields, and DELETE to remove.",
          "codeExample": "GET    /api/orders       -> Get all orders\nGET    /api/orders/5     -> Get order with ID 5\nPOST   /api/orders       -> Create new order\nPUT    /api/orders/5     -> Replace entire order 5\nPATCH  /api/orders/5     -> Update order 5 status only\nDELETE /api/orders/5     -> Delete order 5",
          "commonMistakes": "Using GET for actions that modify data (like /api/deleteUser?id=5), breaking browser caching and safety rules.",
          "miniExercise": "Design a REST endpoint schema for a Blog platform covering posts and comments.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Know difference between PUT (full replace) and PATCH (partial)",
              "completed": false
            },
            {
              "text": "Define idempotency and identify which verbs are idempotent",
              "completed": false
            }
          ]
        },
        {
          "id": "p8-t3",
          "title": "HTTP Status Codes",
          "subtopics": [
            "2xx Success (200 OK, 201 Created, 204 No Content)",
            "4xx Client Errors (400, 401, 403, 404, 409)",
            "5xx Server Errors (500)"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Beginner",
          "whatIsIt": "Three-digit numeric codes issued by a server in response to a client's request indicating the result of the attempt.",
          "whyDoWeNeedIt": "Frontend applications rely on exact status codes to determine whether to render data, redirect to login, or show validation errors.",
          "whenToUseIt": "Return 201 when creating resources; 400 for bad input; 401 for missing authentication; 403 for forbidden role; 404 for missing item.",
          "codeExample": "// Status code decision table:\n// 200 OK: Successful fetch or update\n// 201 Created: New item saved (returns Location header)\n// 204 No Content: Successful delete\n// 400 Bad Request: Validation failed\n// 401 Unauthorized: User not authenticated\n// 403 Forbidden: User authenticated but lacks role\n// 404 Not Found: Resource doesn't exist",
          "commonMistakes": "Returning 200 OK with an error message inside the JSON body instead of a proper 4xx error code.",
          "miniExercise": "Map 10 common API failure scenarios to their corresponding HTTP status codes.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Explain difference between 401 Unauthorized and 403 Forbidden",
              "completed": false
            },
            {
              "text": "Return 201 Created with Location header for new resources",
              "completed": false
            },
            {
              "text": "Return 204 No Content for successful deletions",
              "completed": false
            }
          ]
        },
        {
          "id": "p8-t4",
          "title": "REST Architectural Principles",
          "subtopics": [
            "Statelessness",
            "Client-Server separation",
            "Uniform interface",
            "Resource-based URIs vs Action URIs",
            "JSON data contracts"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Intermediate",
          "whatIsIt": "Representational State Transfer (REST) is an architectural style for networked hypermedia applications.",
          "whyDoWeNeedIt": "Enables independent scalability of client and server and produces intuitive, standard APIs.",
          "whenToUseIt": "When designing web services meant to be consumed by multiple frontend platforms (web, mobile, 3rd party).",
          "codeExample": "// Bad (RPC style in REST):\nPOST /api/getAllCustomers\nPOST /api/deleteCustomer?id=2\n\n// Good (RESTful style):\nGET    /api/customers\nDELETE /api/customers/2",
          "commonMistakes": "Embedding verbs in the URL path instead of letting the HTTP method specify the action.",
          "miniExercise": "Review and refactor an RPC-style API design into a clean RESTful specification.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Use plural nouns for resource paths (/api/products)",
              "completed": false
            },
            {
              "text": "Enforce statelessness: server holds no client session state between requests",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p8-e1",
          "title": "API Endpoint Design Blueprint",
          "description": "Design a complete RESTful endpoint specification for an E-Commerce cart and orders module.",
          "completed": false
        }
      ],
      "notes": "Understanding HTTP status codes and REST conventions is critical before building ASP.NET Core controllers.",
      "resources": [
        {
          "id": "p8-r1",
          "title": "RESTful API Design Best Practices",
          "url": "https://restfulapi.net/",
          "type": "Article"
        }
      ]
    },
    {
      "id": "phase-9",
      "number": 9,
      "title": "ASP.NET Core Fundamentals",
      "shortDescription": "Program.cs, the HTTP request pipeline, middleware, Dependency Injection lifetimes, and configuration management.",
      "difficulty": "Intermediate",
      "estimatedHours": 35,
      "technologies": [
        "ASP.NET Core",
        ".NET 8/9",
        "Dependency Injection",
        "Kestrel"
      ],
      "prerequisites": [
        "phase-1",
        "phase-2",
        "phase-8"
      ],
      "learningObjectives": [
        "Understand the modern ASP.NET Core application bootstrapping workflow in Program.cs.",
        "Master the request processing pipeline and write custom middleware.",
        "Master the built-in Dependency Injection container and service lifetimes (Transient, Scoped, Singleton).",
        "Manage application configuration across environments using appsettings.json and User Secrets.",
        "Configure CORS policies for frontend web clients."
      ],
      "topics": [
        {
          "id": "p9-t1",
          "title": "Application Bootstrapping and Program.cs",
          "subtopics": [
            "WebApplication.CreateBuilder()",
            "Service registration vs Middleware configuration",
            "Kestrel web server",
            "builder.Build() and app.Run()"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Beginner",
          "whatIsIt": "The entry point of an ASP.NET Core application where services are registered into the DI container and the HTTP pipeline is configured.",
          "whyDoWeNeedIt": "Provides a single, clear, unified location to configure all framework and custom application features.",
          "whenToUseIt": "In every ASP.NET Core Web API or web application project.",
          "codeExample": "var builder = WebApplication.CreateBuilder(args);\n\n// 1. Register services into DI container\nbuilder.Services.AddControllers();\nbuilder.Services.AddEndpointsApiExplorer();\nbuilder.Services.AddSwaggerGen();\n\nvar app = builder.Build();\n\n// 2. Configure HTTP request pipeline\nif (app.Environment.IsDevelopment())\n{\n    app.UseSwagger();\n    app.UseSwaggerUI();\n}\n\napp.UseHttpsRedirection();\napp.UseAuthorization();\napp.MapControllers();\n\napp.Run();",
          "commonMistakes": "Attempting to register services after builder.Build() has already been invoked.",
          "miniExercise": "Create a fresh Web API project and inspect what every single line of Program.cs does behind the scenes.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Distinguish between builder.Services (registration) and app (pipeline)",
              "completed": false
            },
            {
              "text": "Configure environment-specific middleware branches",
              "completed": false
            }
          ]
        },
        {
          "id": "p9-t2",
          "title": "Dependency Injection (DI) and Service Lifetimes",
          "subtopics": [
            "Inversion of Control (IoC)",
            "Transient (new per request)",
            "Scoped (one per HTTP request)",
            "Singleton (one per app lifetime)",
            "Captive dependencies anti-pattern"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 10,
          "difficulty": "Intermediate",
          "whatIsIt": "A design pattern where classes receive their dependencies from an external container rather than creating them directly via 'new'.",
          "whyDoWeNeedIt": "Decouples components, enables unit testing via mocks, and manages resource lifetimes safely.",
          "whenToUseIt": "Use Scoped for DbContext and business services; Transient for lightweight stateless utilities; Singleton for caching or thread-safe config.",
          "codeExample": "builder.Services.AddTransient<IEmailSender, EmailSender>();\nbuilder.Services.AddScoped<IProductService, ProductService>();\nbuilder.Services.AddSingleton<ICacheService, MemoryCacheService>();\n\n// Injected via constructor:\npublic class ProductController : ControllerBase\n{\n    private readonly IProductService _service;\n    public ProductController(IProductService service) => _service = service;\n}",
          "commonMistakes": "Registering a Scoped service (like DbContext) inside a Singleton service (Captive Dependency bug).",
          "miniExercise": "Demonstrate the lifetime differences by creating an IOperationId service with Transient, Scoped, and Singleton registrations.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Explain exact behavior of Transient, Scoped, and Singleton",
              "completed": false
            },
            {
              "text": "Inject dependencies through constructor injection",
              "completed": false
            },
            {
              "text": "Avoid captive dependencies and service locator anti-patterns",
              "completed": false
            }
          ]
        },
        {
          "id": "p9-t3",
          "title": "Middleware and the HTTP Pipeline",
          "subtopics": [
            "Middleware concept (Russian doll model)",
            "app.Use() vs app.Run()",
            "Writing custom middleware",
            "Execution order importance"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Intermediate",
          "whatIsIt": "Software components assembled into an application pipeline to handle requests and responses sequentially.",
          "whyDoWeNeedIt": "Centralizes cross-cutting concerns: authentication, logging, CORS, caching, and global exception handling.",
          "whenToUseIt": "To intercept every incoming request or outgoing response before it reaches or leaves controllers.",
          "codeExample": "// Custom inline logging middleware\napp.Use(async (context, next) =>\n{\n    var stopwatch = Stopwatch.StartNew();\n    await next(context); // Call next middleware in pipeline\n    stopwatch.Stop();\n    Console.WriteLine($\"Request [{context.Request.Method} {context.Request.Path}] took {stopwatch.ElapsedMilliseconds}ms\");\n});",
          "commonMistakes": "Placing middleware in the wrong sequence (e.g. UseAuthorization before UseAuthentication).",
          "miniExercise": "Build a custom RequestTimingMiddleware class that adds an 'X-Response-Time-Ms' header to all outgoing responses.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Trace request flow down and response flow back up the pipeline",
              "completed": false
            },
            {
              "text": "Implement custom middleware with RequestDelegate next",
              "completed": false
            },
            {
              "text": "Place authentication, routing, and CORS in correct chronological order",
              "completed": false
            }
          ]
        },
        {
          "id": "p9-t4",
          "title": "Configuration and Secret Management",
          "subtopics": [
            "appsettings.json",
            "appsettings.Development.json",
            "Environment variables",
            "User Secrets (dotnet user-secrets)",
            "IOptions<T> pattern"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Intermediate",
          "whatIsIt": "A multi-layered configuration provider that binds settings, connection strings, and API keys into strongly typed C# classes.",
          "whyDoWeNeedIt": "Separates configuration from code; prevents committing database passwords and API secrets into public Git repositories.",
          "whenToUseIt": "For connection strings, JWT keys, 3rd-party credentials, and feature flags.",
          "codeExample": "// Strongly typed options:\nbuilder.Services.Configure<JwtSettings>(builder.Configuration.GetSection(\"Jwt\"));\n\npublic class AuthService\n{\n    private readonly JwtSettings _jwtSettings;\n    public AuthService(IOptions<JwtSettings> options)\n    {\n        _jwtSettings = options.Value;\n    }\n}",
          "commonMistakes": "Hardcoding database connection strings or secret keys directly inside C# code files.",
          "miniExercise": "Configure User Secrets for a development connection string and bind a custom settings class using IOptions.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Retrieve configuration via IConfiguration and IOptions<T>",
              "completed": false
            },
            {
              "text": "Use dotnet user-secrets in local development",
              "completed": false
            },
            {
              "text": "Override local settings in production using Environment Variables",
              "completed": false
            }
          ]
        },
        {
          "id": "p9-t5",
          "title": "CORS (Cross-Origin Resource Sharing)",
          "subtopics": [
            "Same-Origin Policy",
            "What is CORS?",
            "AllowAnyOrigin vs WithOrigins",
            "AllowAnyMethod, AllowAnyHeader",
            "app.UseCors placement"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Beginner",
          "whatIsIt": "A browser security mechanism that restricts web pages from making requests to a different domain than the one that served the page.",
          "whyDoWeNeedIt": "Angular running on localhost:4200 cannot make requests to ASP.NET Core on localhost:5001 unless the API explicitly enables CORS.",
          "whenToUseIt": "In all decoupled Full Stack web applications.",
          "codeExample": "builder.Services.AddCors(options =>\n{\n    options.AddPolicy(\"AllowAngularClient\", policy =>\n    {\n        policy.WithOrigins(\"http://localhost:4200\")\n              .AllowAnyHeader()\n              .AllowAnyMethod()\n              .AllowCredentials();\n    });\n});\n\n// Must be placed between UseRouting and UseAuthorization\napp.UseCors(\"AllowAngularClient\");",
          "commonMistakes": "Placing app.UseCors after app.UseAuthorization or app.MapControllers, causing CORS headers to be omitted.",
          "miniExercise": "Configure a named CORS policy allowing specific frontend origins and verify browser preflight OPTIONS response.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Explain why browsers block cross-origin requests",
              "completed": false
            },
            {
              "text": "Configure secure CORS policies avoiding wildcard origins in production",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p9-e1",
          "title": "Configurable Web API Starter",
          "description": "Set up an ASP.NET Core project with custom timing middleware, IOptions settings, and CORS.",
          "completed": false
        }
      ],
      "notes": "Understanding service lifetimes (Scoped vs Transient vs Singleton) is one of the most common interview questions for .NET roles.",
      "resources": [
        {
          "id": "p9-r1",
          "title": "ASP.NET Core Fundamentals",
          "url": "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/",
          "type": "Documentation"
        }
      ]
    },
    {
      "id": "phase-10",
      "number": 10,
      "title": "ASP.NET Core Web API",
      "shortDescription": "Controllers, attribute routing, model binding, DTOs, FluentValidation, OpenAPI/Swagger, and RESTful CRUD endpoints.",
      "difficulty": "Intermediate",
      "estimatedHours": 40,
      "technologies": [
        "ASP.NET Core",
        "Web API",
        "Swagger",
        "Postman",
        "FluentValidation"
      ],
      "prerequisites": [
        "phase-7",
        "phase-8",
        "phase-9"
      ],
      "learningObjectives": [
        "Build RESTful Web API controllers with [ApiController] and [Route] attributes.",
        "Bind incoming HTTP data via [FromBody], [FromRoute], and [FromQuery].",
        "Return strongly typed results with ActionResult<T> and standard HTTP helpers.",
        "Implement Request and Response DTO patterns to protect internal database entities.",
        "Validate inputs using Data Annotations and FluentValidation.",
        "Document and test endpoints using Swagger OpenAPI and Postman."
      ],
      "topics": [
        {
          "id": "p10-t1",
          "title": "Controllers and Attribute Routing",
          "subtopics": [
            "[ApiController] attribute",
            "ControllerBase vs Controller",
            "[Route(\"api/[controller]\")]",
            "[HttpGet], [HttpPost], [HttpPut], [HttpDelete]",
            "Route parameters"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Beginner",
          "whatIsIt": "Controllers group incoming HTTP request handlers (actions) that process requests and return HTTP responses.",
          "whyDoWeNeedIt": "Organizes API endpoints by domain resource and automatically applies model binding and validation conventions.",
          "whenToUseIt": "In any ASP.NET Core Web API architecture handling RESTful resources.",
          "codeExample": "[ApiController]\n[Route(\"api/[controller]\")]\npublic class ProductsController : ControllerBase\n{\n    [HttpGet(\"{id:int}\")]\n    public async Task<ActionResult<ProductResponseDto>> GetById(int id)\n    {\n        // Action logic\n    }\n}",
          "commonMistakes": "Inheriting from 'Controller' instead of 'ControllerBase' in Web APIs, dragging in unnecessary MVC view rendering overhead.",
          "miniExercise": "Create a CategoriesController with endpoints for GET all, GET by id, and DELETE with route constraints.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Inherit from ControllerBase in Web APIs",
              "completed": false
            },
            {
              "text": "Use [ApiController] to enable automatic model state validation",
              "completed": false
            },
            {
              "text": "Define route parameters with constraints like {id:int}",
              "completed": false
            }
          ]
        },
        {
          "id": "p10-t2",
          "title": "Action Return Types and HTTP Helpers",
          "subtopics": [
            "IActionResult vs ActionResult<T>",
            "Ok(data)",
            "CreatedAtAction()",
            "NoContent()",
            "BadRequest(errors)",
            "NotFound()"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Beginner",
          "whatIsIt": "Return types that allow actions to return both a strongly typed data payload and an appropriate HTTP status code.",
          "whyDoWeNeedIt": "Gives Swagger precise metadata for API client generation while providing clean helper methods for status codes.",
          "whenToUseIt": "Always prefer ActionResult<T> in Web API actions for type safety and OpenAPI documentation clarity.",
          "codeExample": "[HttpPost]\npublic async Task<ActionResult<ProductDto>> Create(CreateProductDto dto)\n{\n    var product = await _service.CreateAsync(dto);\n    return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);\n}",
          "commonMistakes": "Returning general 200 OK after resource creation instead of 201 Created with a Location header.",
          "miniExercise": "Write an action that returns 404 NotFound if an item does not exist, or 200 OK with the item if found.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Use ActionResult<T> return types consistently",
              "completed": false
            },
            {
              "text": "Return CreatedAtAction for POST creation endpoints",
              "completed": false
            },
            {
              "text": "Return NoContent for successful DELETE actions",
              "completed": false
            }
          ]
        },
        {
          "id": "p10-t3",
          "title": "Model Binding Sources",
          "subtopics": [
            "[FromBody] for JSON request payloads",
            "[FromRoute] for URL segments",
            "[FromQuery] for query parameters",
            "[FromHeader]",
            "[FromForm] for file uploads"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Beginner",
          "whatIsIt": "The automated process of extracting data from an HTTP request and mapping it to action method parameters.",
          "whyDoWeNeedIt": "Eliminates tedious manual parsing of raw HTTP strings, query parameters, and JSON payloads.",
          "whenToUseIt": "To accept query parameters (page, search), route IDs, and complex request JSON bodies.",
          "codeExample": "[HttpGet]\npublic async Task<ActionResult<List<ProductDto>>> GetProducts(\n    [FromQuery] string? search,\n    [FromQuery] int page = 1,\n    [FromQuery] int pageSize = 10)\n{\n    // Filtering and paging logic\n}",
          "commonMistakes": "Confusing [FromQuery] with [FromRoute], leading to null parameters when requests arrive.",
          "miniExercise": "Build an endpoint that accepts a route category ID and query parameters for sorting and minimum price.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Select correct binding attribute for each parameter source",
              "completed": false
            },
            {
              "text": "Provide default fallback values for optional query parameters",
              "completed": false
            }
          ]
        },
        {
          "id": "p10-t4",
          "title": "DTO Pattern and Data Mapping",
          "subtopics": [
            "Why never expose EF Core entities directly",
            "Request DTOs",
            "Response DTOs",
            "Manual mapping vs Mapperly / AutoMapper"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Intermediate",
          "whatIsIt": "Data Transfer Objects (DTOs) are simple flat classes designed specifically to transmit data between client and API without business logic.",
          "whyDoWeNeedIt": "Exposing EF Core entities directly causes infinite JSON circular reference loops, security over-posting attacks, and tight coupling.",
          "whenToUseIt": "For every single input and output of an API endpoint.",
          "codeExample": "// Request DTO: Only fields the client is allowed to submit\npublic record CreateProductRequest(\n    string Name,\n    decimal Price,\n    int CategoryId\n);\n\n// Response DTO: Safe representation for clients\npublic record ProductResponse(\n    int Id,\n    string Name,\n    decimal Price,\n    string CategoryName\n);",
          "commonMistakes": "Exposing internal password hash fields or database foreign keys directly to the client by returning EF entities.",
          "miniExercise": "Create Request and Response DTOs for a User entity, ensuring PasswordHash and Salt are never exposed.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Never return DbContext entity classes from API actions",
              "completed": false
            },
            {
              "text": "Create specialized Request and Response DTOs using C# records",
              "completed": false
            },
            {
              "text": "Map between entities and DTOs cleanly",
              "completed": false
            }
          ]
        },
        {
          "id": "p10-t5",
          "title": "Input Validation and FluentValidation",
          "subtopics": [
            "Data Annotations validation",
            "FluentValidation library",
            "AbstractValidator<T>",
            "Returning 400 Bad Request with ProblemDetails"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 7,
          "difficulty": "Intermediate",
          "whatIsIt": "Automated verification that incoming request data satisfies business constraints before processing.",
          "whyDoWeNeedIt": "Prevents malformed data, database constraint violations, and security injection attempts.",
          "whenToUseIt": "Validate every single incoming Request DTO.",
          "codeExample": "public class CreateProductRequestValidator : AbstractValidator<CreateProductRequest>\n{\n    public CreateProductRequestValidator()\n    {\n        RuleFor(x => x.Name).NotEmpty().MaximumLength(100);\n        RuleFor(x => x.Price).GreaterThan(0).WithMessage(\"Price must be positive.\");\n        RuleFor(x => x.CategoryId).GreaterThan(0);\n    }\n}",
          "commonMistakes": "Writing validation checks manually inside controllers, cluttering action methods.",
          "miniExercise": "Write a FluentValidation validator for a UserRegistrationRequest enforcing password complexity and email format.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Install and configure FluentValidation.AspNetCore",
              "completed": false
            },
            {
              "text": "Write clean AbstractValidator<T> rule sets",
              "completed": false
            },
            {
              "text": "Return standard Problem Details validation errors",
              "completed": false
            }
          ]
        },
        {
          "id": "p10-t6",
          "title": "Swagger OpenAPI and Postman Testing",
          "subtopics": [
            "Swashbuckle / Microsoft OpenAPI",
            "XML documentation comments",
            "Configuring JWT Auth in Swagger UI",
            "Creating Postman collections and environments"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Beginner",
          "whatIsIt": "OpenAPI generates machine-readable API specifications and interactive web documentation (Swagger UI) for testing endpoints.",
          "whyDoWeNeedIt": "Allows frontend developers to inspect and test backend endpoints independently without reading backend source code.",
          "whenToUseIt": "Enabled by default in development for every modern Web API.",
          "codeExample": "builder.Services.AddSwaggerGen(c =>\n{\n    c.SwaggerDoc(\"v1\", new OpenApiInfo { Title = \"Products API\", Version = \"v1\" });\n});",
          "commonMistakes": "Leaving Swagger UI publicly accessible without authentication in production environments.",
          "miniExercise": "Export a complete Postman collection for your Products API with automated test assertions.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Document endpoints using XML comments",
              "completed": false
            },
            {
              "text": "Test full CRUD workflows in Swagger UI and Postman",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p10-e1",
          "title": "Complete Products & Categories Web API",
          "description": "Build full CRUD REST API with DTOs, FluentValidation, EF Core, and Swagger documentation.",
          "completed": false
        }
      ],
      "notes": "The Products API built in this phase serves as the backend reference model for the rest of the roadmap.",
      "resources": [
        {
          "id": "p10-r1",
          "title": "Create Web APIs with ASP.NET Core",
          "url": "https://learn.microsoft.com/en-us/aspnet/core/web-api/",
          "type": "Documentation"
        }
      ]
    },
    {
      "id": "phase-11",
      "number": 11,
      "title": "Backend Architecture & Clean Code",
      "shortDescription": "Separation of concerns, Service layer, Repository pattern trade-offs, and Clean Architecture principles.",
      "difficulty": "Intermediate",
      "estimatedHours": 35,
      "technologies": [
        "Clean Architecture",
        "Repository Pattern",
        "CQRS Overview"
      ],
      "prerequisites": [
        "phase-9",
        "phase-10"
      ],
      "learningObjectives": [
        "Structure backend applications into distinct logical layers.",
        "Implement Service Layer containing pure business rules.",
        "Understand when to use Repository Pattern and when EF Core is sufficient.",
        "Understand Clean Architecture layers: Domain, Application, Infrastructure, Presentation.",
        "Identify and avoid over-engineering in Junior-level projects."
      ],
      "topics": [
        {
          "id": "p11-t1",
          "title": "Separation of Concerns and N-Tier Layering",
          "subtopics": [
            "Why controllers should be thin",
            "Presentation Layer",
            "Service / Business Logic Layer",
            "Data Access Layer",
            "Dependency flow"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Intermediate",
          "whatIsIt": "Dividing a computer program into distinct sections, where each section addresses a separate concern.",
          "whyDoWeNeedIt": "Prevents massive bloated controllers and makes business rules reusable across API, background workers, and tests.",
          "whenToUseIt": "In all non-trivial applications beyond simple hello-world prototypes.",
          "codeExample": "// Controller remains thin:\n[HttpPost]\npublic async Task<ActionResult<OrderResponse>> Create(CreateOrderRequest request)\n{\n    var response = await _orderService.ProcessOrderAsync(request);\n    return CreatedAtAction(nameof(GetById), new { id = response.Id }, response);\n}",
          "commonMistakes": "Writing raw EF Core queries and complex business validation directly inside controller action methods.",
          "miniExercise": "Refactor a controller with 100 lines of database queries into a dedicated ProductService.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Keep controllers thin: receive request, call service, return HTTP response",
              "completed": false
            },
            {
              "text": "Encapsulate business calculations and validation in Service classes",
              "completed": false
            }
          ]
        },
        {
          "id": "p11-t2",
          "title": "Repository Pattern and Unit of Work Trade-offs",
          "subtopics": [
            "Generic Repository",
            "Specific Repository",
            "Is EF Core already a Repository?",
            "When to use repositories vs direct DbContext"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 10,
          "difficulty": "Intermediate",
          "whatIsIt": "An abstraction layer between data access logic and the business logic layer.",
          "whyDoWeNeedIt": "Hides database query details from services and provides an abstraction for unit test mocking.",
          "whenToUseIt": "Use when you need to mock data access for unit tests or encapsulate complex custom querying logic.",
          "codeExample": "public interface IProductRepository\n{\n    Task<Product?> GetByIdAsync(int id);\n    Task<IReadOnlyList<Product>> GetActiveProductsAsync();\n    Task AddAsync(Product product);\n    void Delete(Product product);\n}",
          "commonMistakes": "Writing a generic repository that just re-exposes IQueryable, negating the benefit of the repository abstraction.",
          "miniExercise": "Implement an IProductRepository with SQL Server EF Core implementation and demonstrate unit test mocking.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Explain why EF Core already acts as a Unit of Work and Repository",
              "completed": false
            },
            {
              "text": "Weigh benefits against added complexity for junior projects",
              "completed": false
            }
          ]
        },
        {
          "id": "p11-t3",
          "title": "Clean Architecture Principles",
          "subtopics": [
            "Domain Layer (Core Entities & Enums)",
            "Application Layer (Interfaces, DTOs, Services)",
            "Infrastructure Layer (EF Core, Email, External APIs)",
            "Presentation (Web API)",
            "Dependency Rule"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 12,
          "difficulty": "Advanced",
          "whatIsIt": "An architectural pattern emphasizing that business logic (Domain & Application) must never depend on database or UI technologies.",
          "whyDoWeNeedIt": "Allows replacing databases, third-party services, or UI frameworks without touching core business logic.",
          "whenToUseIt": "In mid-to-large scale enterprise applications.",
          "codeExample": "Project Solution Structure:\n- MyProject.Domain        (Entities, Value Objects - No external dependencies)\n- MyProject.Application   (Services, Interfaces, DTOs - Depends on Domain)\n- MyProject.Infrastructure(DbContext, Repositories - Depends on Application)\n- MyProject.WebApi        (Controllers, Program.cs - Entry point)",
          "commonMistakes": "Creating 15 projects for a tiny 2-table application, causing unnecessary file navigation friction.",
          "miniExercise": "Structure a solution into Domain, Application, Infrastructure, and Presentation projects.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Enforce dependency arrows pointing inward toward Domain",
              "completed": false
            },
            {
              "text": "Ensure Domain project has zero third-party NuGet dependencies",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p11-e1",
          "title": "Layered Clean Architecture Setup",
          "description": "Organize an e-commerce backend into Domain, Application, Infrastructure, and API projects.",
          "completed": false
        }
      ],
      "notes": "For Junior roles, understanding the 'why' of architecture is more important than memorizing dogma.",
      "resources": [
        {
          "id": "p11-r1",
          "title": "Clean Architecture with ASP.NET Core",
          "url": "https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures",
          "type": "Article"
        }
      ]
    },
    {
      "id": "phase-12",
      "number": 12,
      "title": "Authentication & Authorization (JWT)",
      "shortDescription": "Identity concepts, password hashing, JSON Web Tokens (JWT), Claims, Roles, and securing endpoints.",
      "difficulty": "Intermediate",
      "estimatedHours": 35,
      "technologies": [
        "JWT",
        "ASP.NET Core Identity",
        "BCrypt",
        "Claims-Based Auth"
      ],
      "prerequisites": [
        "phase-9",
        "phase-10"
      ],
      "learningObjectives": [
        "Differentiate clearly between Authentication (Who are you?) and Authorization (What can you do?).",
        "Hash and salt user passwords safely using modern algorithms (BCrypt / PBKDF2).",
        "Generate and validate cryptographically signed JSON Web Tokens (JWT).",
        "Protect endpoints using [Authorize], roles, and policy checks.",
        "Extract authenticated user claims safely inside controllers."
      ],
      "topics": [
        {
          "id": "p12-t1",
          "title": "Authentication vs Authorization Fundamentals",
          "subtopics": [
            "AuthN vs AuthZ",
            "Password hashing and salting",
            "Why never store plaintext passwords",
            "BCrypt / ASP.NET PasswordHasher"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Beginner",
          "whatIsIt": "Authentication verifies user identity; authorization determines whether an authenticated user has permission to perform an action.",
          "whyDoWeNeedIt": "Protects user data, administrative operations, and prevents unauthorized access to private resources.",
          "whenToUseIt": "In any application with user accounts, roles, or private data.",
          "codeExample": "// Password hashing with BCrypt:\nstring passwordHash = BCrypt.Net.BCrypt.HashPassword(plainPassword);\n\n// Verification during login:\nbool isValid = BCrypt.Net.BCrypt.Verify(incomingPassword, storedHash);",
          "commonMistakes": "Using simple MD5 or SHA256 for passwords without salting, which are vulnerable to rainbow table attacks.",
          "miniExercise": "Write a user registration and login method using BCrypt for password hashing.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Explain difference between hashing, encryption, and encoding",
              "completed": false
            },
            {
              "text": "Hash passwords with salt before persisting to database",
              "completed": false
            }
          ]
        },
        {
          "id": "p12-t2",
          "title": "JSON Web Tokens (JWT) Architecture",
          "subtopics": [
            "JWT Anatomy: Header, Payload, Signature",
            "Claims (UserId, Email, Roles)",
            "Symmetric vs Asymmetric signing",
            "Token expiration and security"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 10,
          "difficulty": "Intermediate",
          "whatIsIt": "A compact, URL-safe means of representing claims to be transferred between two parties statelessly.",
          "whyDoWeNeedIt": "Enables stateless authentication where the backend does not need to query session tables on every single request.",
          "whenToUseIt": "The standard authentication mechanism for modern Web APIs consumed by Single Page Apps (Angular) and mobile clients.",
          "codeExample": "public string GenerateToken(User user, string secretKey)\n{\n    var claims = new[] {\n        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),\n        new Claim(ClaimTypes.Email, user.Email),\n        new Claim(ClaimTypes.Role, user.Role)\n    };\n    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));\n    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);\n    var token = new JwtSecurityToken(\n        claims: claims,\n        expires: DateTime.UtcNow.AddHours(2),\n        signingCredentials: creds\n    );\n    return new JwtSecurityTokenHandler().WriteToken(token);\n}",
          "commonMistakes": "Storing sensitive data (like passwords or credit card numbers) in JWT claims (claims are base64-encoded and readable by anyone).",
          "miniExercise": "Decode a JWT token on jwt.io and inspect its header, claims payload, and signature.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Inspect JWT Header, Payload, and Signature",
              "completed": false
            },
            {
              "text": "Sign tokens with HMAC-SHA256 and a secret key",
              "completed": false
            },
            {
              "text": "Keep token payloads lightweight and non-sensitive",
              "completed": false
            }
          ]
        },
        {
          "id": "p12-t3",
          "title": "Securing Endpoints with [Authorize] and Roles",
          "subtopics": [
            "builder.Services.AddAuthentication().AddJwtBearer()",
            "app.UseAuthentication() and app.UseAuthorization()",
            "[Authorize] attribute",
            "[Authorize(Roles = \"Admin\")]",
            "Extracting User.Claims"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 10,
          "difficulty": "Intermediate",
          "whatIsIt": "Configuring ASP.NET Core middleware to validate incoming Bearer tokens and enforce role restrictions on controller actions.",
          "whyDoWeNeedIt": "Blocks unauthorized requests with 401 Unauthorized or 403 Forbidden automatically.",
          "whenToUseIt": "Decorate any controller or action that requires a logged-in user or specific administrative role.",
          "codeExample": "[Authorize(Roles = \"Admin\")]\n[HttpDelete(\"{id}\")]\npublic async Task<IActionResult> DeleteProduct(int id)\n{\n    // Only reachable by authenticated users with Admin role\n    var currentUserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;\n    await _service.DeleteAsync(id);\n    return NoContent();\n}",
          "commonMistakes": "Forgetting to add app.UseAuthentication() before app.UseAuthorization() in Program.cs.",
          "miniExercise": "Build an endpoint accessible only to users with role 'Manager' and extract current user ID from Claims.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Configure AddJwtBearer validation options in Program.cs",
              "completed": false
            },
            {
              "text": "Protect endpoints using [Authorize] and role checks",
              "completed": false
            },
            {
              "text": "Extract user ID safely from HttpContext.User.Claims",
              "completed": false
            }
          ]
        },
        {
          "id": "p12-t4",
          "title": "Refresh Tokens Concept",
          "subtopics": [
            "Short-lived access token vs long-lived refresh token",
            "Revocation workflow",
            "Database storage for refresh tokens",
            "Security against token theft"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Advanced",
          "whatIsIt": "A secure credential used to obtain a new access token when the current short-lived access token expires without requiring user re-login.",
          "whyDoWeNeedIt": "Limits the window of opportunity if an access token is intercepted while maintaining a smooth user experience.",
          "whenToUseIt": "In production enterprise applications requiring high security and silent session renewal.",
          "codeExample": "// Refresh token entity:\npublic class RefreshToken {\n    public string Token { get; set; }\n    public DateTime ExpiresAt { get; set; }\n    public bool IsRevoked { get; set; }\n    public int UserId { get; set; }\n}",
          "commonMistakes": "Setting access tokens to expire after 30 days instead of using short-lived tokens with refresh tokens.",
          "miniExercise": "Design the database table and rotation logic for issuing and validating refresh tokens.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Explain why short-lived access tokens improve security",
              "completed": false
            },
            {
              "text": "Design refresh token rotation and revocation workflow",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p12-e1",
          "title": "Complete Auth API Module",
          "description": "Build Register, Login, and Role-protected Profile endpoints with JWT and BCrypt.",
          "completed": false
        }
      ],
      "notes": "Authentication and authorization questions are universal in Junior .NET backend interviews.",
      "resources": [
        {
          "id": "p12-r1",
          "title": "Overview of ASP.NET Core Authentication",
          "url": "https://learn.microsoft.com/en-us/aspnet/core/security/authentication/",
          "type": "Documentation"
        }
      ]
    },
    {
      "id": "phase-13",
      "number": 13,
      "title": "Error Handling & Logging",
      "shortDescription": "Global exception middleware, RFC 7807 Problem Details, ILogger structured logging, and Serilog.",
      "difficulty": "Intermediate",
      "estimatedHours": 20,
      "technologies": [
        "ILogger",
        "Serilog",
        "Problem Details",
        "Middleware"
      ],
      "prerequisites": [
        "phase-9",
        "phase-10"
      ],
      "learningObjectives": [
        "Implement global exception handling middleware to catch unhandled errors.",
        "Return standard RFC 7807 Problem Details responses instead of leaking stack traces.",
        "Use Microsoft.Extensions.Logging with appropriate log levels (Information, Warning, Error).",
        "Implement structured logging with message templates.",
        "Safeguard logs from recording sensitive credentials or PII."
      ],
      "topics": [
        {
          "id": "p13-t1",
          "title": "Global Exception Handling",
          "subtopics": [
            "Why try-catch in every controller is an anti-pattern",
            "Custom exception middleware",
            "app.UseExceptionHandler()",
            "RFC 7807 Problem Details"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Intermediate",
          "whatIsIt": "A centralized pipeline handler that intercepts all unhandled exceptions thrown across the application and formats consistent error responses.",
          "whyDoWeNeedIt": "Prevents leaking raw stack traces to users (security risk) and guarantees consistent JSON error contracts for frontends.",
          "whenToUseIt": "In every production ASP.NET Core Web API.",
          "codeExample": "public class ExceptionHandlingMiddleware\n{\n    private readonly RequestDelegate _next;\n    private readonly ILogger<ExceptionHandlingMiddleware> _logger;\n\n    public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)\n    {\n        _next = next;\n        _logger = logger;\n    }\n\n    public async Task InvokeAsync(HttpContext context)\n    {\n        try { await _next(context); }\n        catch (Exception ex)\n        {\n            _logger.LogError(ex, \"Unhandled exception occurred: {Message}\", ex.Message);\n            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;\n            context.Response.ContentType = \"application/problem+json\";\n            await context.Response.WriteAsJsonAsync(new ProblemDetails {\n                Status = 500,\n                Title = \"An error occurred while processing your request.\"\n            });\n        }\n    }\n}",
          "commonMistakes": "Returning full C# exception stack traces directly to the client in production responses.",
          "miniExercise": "Implement global exception middleware that maps custom NotFoundException to 404 and unexpected errors to 500.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Centralize exception handling in middleware",
              "completed": false
            },
            {
              "text": "Format API error responses using RFC 7807 ProblemDetails",
              "completed": false
            }
          ]
        },
        {
          "id": "p13-t2",
          "title": "Structured Logging with ILogger",
          "subtopics": [
            "ILogger<T>",
            "Log levels: Trace, Debug, Information, Warning, Error, Critical",
            "Structured logging placeholders",
            "Serilog sinks"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Beginner",
          "whatIsIt": "Recording operational events and errors with named structured properties rather than flat concatenated strings.",
          "whyDoWeNeedIt": "Allows log management tools (Seq, Elasticsearch, Azure Application Insights) to index, search, and filter events by property.",
          "whenToUseIt": "Throughout controllers, services, and background workers for key events and errors.",
          "codeExample": "// Structured logging (Good):\n_logger.LogInformation(\"Order {OrderId} placed successfully for customer {CustomerId}\", order.Id, customer.Id);\n\n// Bad (String interpolation destroys search indexing):\n_logger.LogInformation($\"Order {order.Id} placed for {customer.Id}\");",
          "commonMistakes": "Using string interpolation inside ILogger methods, destroying structured parameter indexing.",
          "miniExercise": "Configure Serilog to output structured logs to both console and a rolling daily log file.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Use appropriate log level for each event",
              "completed": false
            },
            {
              "text": "Write structured message templates with named placeholders",
              "completed": false
            },
            {
              "text": "Never log passwords, tokens, or personal identity numbers",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p13-e1",
          "title": "Enterprise Error & Log Pipeline",
          "description": "Configure global exception middleware with Serilog file sinks and ProblemDetails payloads.",
          "completed": false
        }
      ],
      "notes": "Clean error handling and structured logs make production debugging manageable.",
      "resources": [
        {
          "id": "p13-r1",
          "title": "Logging in .NET Core and ASP.NET Core",
          "url": "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/logging/",
          "type": "Documentation"
        }
      ]
    },
    {
      "id": "phase-14",
      "number": 14,
      "title": "Testing (Unit & Integration)",
      "shortDescription": "Unit testing with xUnit, Arrange-Act-Assert, mocking with Moq/NSubstitute, and basic integration tests.",
      "difficulty": "Intermediate",
      "estimatedHours": 30,
      "technologies": [
        "xUnit",
        "Moq",
        "FluentAssertions",
        "WebApplicationFactory"
      ],
      "prerequisites": [
        "phase-2",
        "phase-10"
      ],
      "learningObjectives": [
        "Write clean, deterministic unit tests using xUnit and FluentAssertions.",
        "Structure every test cleanly with Arrange, Act, Assert.",
        "Mock external interfaces and repositories using Moq or NSubstitute.",
        "Test controller actions and service business logic in complete isolation.",
        "Understand basic API integration testing using WebApplicationFactory."
      ],
      "topics": [
        {
          "id": "p14-t1",
          "title": "Unit Testing Fundamentals and xUnit",
          "subtopics": [
            "What is a unit test?",
            "xUnit framework",
            "[Fact] and [Theory]",
            "[InlineData] for parameterized testing",
            "Arrange, Act, Assert (AAA) pattern"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Beginner",
          "whatIsIt": "Automated tests that verify a single isolated unit of code (usually a method) behaves correctly under specific inputs.",
          "whyDoWeNeedIt": "Detects regressions instantly, validates boundary conditions, and gives confidence when refactoring.",
          "whenToUseIt": "For business calculations, validation rules, and domain services.",
          "codeExample": "public class CalculatorTests\n{\n    [Theory]\n    [InlineData(10, 20, 30)]\n    [InlineData(-5, 5, 0)]\n    public void Add_ValidInputs_ReturnsExpectedSum(int a, int b, int expected)\n    {\n        // Arrange\n        var calc = new Calculator();\n        // Act\n        int result = calc.Add(a, b);\n        // Assert\n        Assert.Equal(expected, result);\n    }\n}",
          "commonMistakes": "Writing unit tests that touch live databases or external APIs, making tests slow and flaky.",
          "miniExercise": "Write 5 unit tests verifying discount calculations including zero and negative boundary cases.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Structure every test using Arrange, Act, Assert",
              "completed": false
            },
            {
              "text": "Use [Theory] and [InlineData] for edge cases",
              "completed": false
            }
          ]
        },
        {
          "id": "p14-t2",
          "title": "Mocking Dependencies with Moq",
          "subtopics": [
            "Why mock?",
            "Mock<T>",
            "Setup and Returns",
            "Verifying method calls (Verify)",
            "Testing services without a database"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 10,
          "difficulty": "Intermediate",
          "whatIsIt": "Creating simulated implementations of interfaces to isolate the class under test from external dependencies.",
          "whyDoWeNeedIt": "Allows testing service logic without connecting to SQL Server, sending real emails, or charging real credit cards.",
          "whenToUseIt": "Whenever testing classes that depend on repository interfaces or external services.",
          "codeExample": "[Fact]\npublic async Task GetProduct_ExistingId_ReturnsDto()\n{\n    // Arrange\n    var mockRepo = new Mock<IProductRepository>();\n    mockRepo.Setup(r => r.GetByIdAsync(1))\n            .ReturnsAsync(new Product { Id = 1, Name = \"Mouse\" });\n\n    var service = new ProductService(mockRepo.Object);\n\n    // Act\n    var result = await service.GetByIdAsync(1);\n\n    // Assert\n    Assert.NotNull(result);\n    Assert.Equal(\"Mouse\", result.Name);\n    mockRepo.Verify(r => r.GetByIdAsync(1), Times.Once);\n}",
          "commonMistakes": "Mocking concrete classes without virtual methods instead of mocking interfaces.",
          "miniExercise": "Test an OrderService method where the repository returns null and assert that a NotFoundException is thrown.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Mock repository and service interfaces with Mock<T>",
              "completed": false
            },
            {
              "text": "Configure expected return values with Setup and ReturnsAsync",
              "completed": false
            },
            {
              "text": "Verify that methods were called with Verify(..., Times.Once)",
              "completed": false
            }
          ]
        },
        {
          "id": "p14-t3",
          "title": "Integration Testing with WebApplicationFactory",
          "subtopics": [
            "Unit test vs Integration test",
            "WebApplicationFactory<Program>",
            "In-memory database testing",
            "Testing HTTP status codes"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Advanced",
          "whatIsIt": "Testing multiple components working together (routing, model binding, validation, middleware, controller) by sending real HTTP requests in-memory.",
          "whyDoWeNeedIt": "Catches bugs that unit tests miss, such as routing errors, pipeline misconfigurations, and validation failures.",
          "whenToUseIt": "For critical end-to-end API workflows (e.g. user login, checkout).",
          "codeExample": "public class ProductsApiTests : IClassFixture<WebApplicationFactory<Program>>\n{\n    private readonly HttpClient _client;\n    public ProductsApiTests(WebApplicationFactory<Program> factory)\n    {\n        _client = factory.CreateClient();\n    }\n\n    [Fact]\n    public async Task GetAll_ReturnsSuccessAndJson()\n    {\n        var response = await _client.GetAsync(\"/api/products\");\n        response.EnsureSuccessStatusCode();\n        Assert.Equal(\"application/json; charset=utf-8\", response.Content.Headers.ContentType?.ToString());\n    }\n}",
          "commonMistakes": "Running integration tests against a shared production or staging database.",
          "miniExercise": "Write an integration test that posts an invalid product request and verifies that the response is 400 Bad Request.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Boot test server in-memory using WebApplicationFactory",
              "completed": false
            },
            {
              "text": "Test full HTTP request/response pipeline",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p14-e1",
          "title": "Product Service Test Suite",
          "description": "Write 10 unit tests using xUnit and Moq covering all CRUD paths and edge cases.",
          "completed": false
        }
      ],
      "notes": "Having unit tests in your GitHub projects immediately proves to interviewers that you write professional code.",
      "resources": [
        {
          "id": "p14-r1",
          "title": "Unit Testing C# in .NET Core using dotnet test and xUnit",
          "url": "https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-dotnet-test",
          "type": "Documentation"
        }
      ]
    },
    {
      "id": "phase-15",
      "number": 15,
      "title": "Git & GitHub",
      "shortDescription": "Version control workflows, staging, commit conventions, branching strategies, pull requests, and resolving merge conflicts.",
      "difficulty": "Beginner",
      "estimatedHours": 20,
      "technologies": [
        "Git",
        "GitHub",
        "CLI",
        "VS Code Git"
      ],
      "prerequisites": [
        "phase-0"
      ],
      "learningObjectives": [
        "Master the local Git workflow: working directory, staging area, commit history.",
        "Write semantic commit messages following Conventional Commits.",
        "Manage branches (feature branches, main) and resolve merge conflicts calmly.",
        "Push repositories to GitHub and manage Pull Requests with clean README documentation.",
        "Configure .gitignore for .NET and Angular projects to avoid committing bin/obj and node_modules."
      ],
      "topics": [
        {
          "id": "p15-t1",
          "title": "Git Fundamentals and Local Workflow",
          "subtopics": [
            "git init",
            "Working directory, Staging area, Repository",
            "git add, git commit",
            "git status, git log",
            ".gitignore configuration"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Beginner",
          "whatIsIt": "A distributed version control system that records changes to a set of files over time so you can recall specific versions later.",
          "whyDoWeNeedIt": "Prevents losing work, enables safe experimentation, and is the absolute foundation of professional team collaboration.",
          "whenToUseIt": "In every single project from day one.",
          "codeExample": "git init\ngit add .\ngit commit -m \"feat: implement initial product entity and db context\"\ngit status\ngit log --oneline -n 5",
          "commonMistakes": "Committing build artifacts (bin/, obj/, node_modules/) by forgetting to create a proper .gitignore file.",
          "miniExercise": "Initialize a Git repository, configure a .NET .gitignore, make 3 semantic commits, and inspect log history.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Configure .gitignore for .NET (excluding bin, obj, user secrets)",
              "completed": false
            },
            {
              "text": "Make small, focused commits with clear messages",
              "completed": false
            }
          ]
        },
        {
          "id": "p15-t2",
          "title": "Branching, Merging, and Conflict Resolution",
          "subtopics": [
            "git switch -c feature-branch",
            "git branch",
            "git merge",
            "Merge conflict anatomy",
            "Resolving conflicts in VS Code"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Intermediate",
          "whatIsIt": "Branches allow isolating feature development from the stable production branch (main).",
          "whyDoWeNeedIt": "Allows working on new features or bugfixes without breaking stable code.",
          "whenToUseIt": "Create a new branch for every distinct feature, bugfix, or refactoring task.",
          "codeExample": "# Create and switch to new branch\ngit switch -c feature/jwt-authentication\n\n# Commit work...\ngit add .\ngit commit -m \"feat: add jwt token generation service\"\n\n# Switch back to main and merge\ngit switch main\ngit merge feature/jwt-authentication",
          "commonMistakes": "Working directly on the main branch for experimental features.",
          "miniExercise": "Simulate a merge conflict by editing the same line in two branches and resolve it cleanly.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Create and switch branches with git switch",
              "completed": false
            },
            {
              "text": "Identify conflict markers (<<<<<<<, =======, >>>>>>>) and resolve them",
              "completed": false
            }
          ]
        },
        {
          "id": "p15-t3",
          "title": "GitHub, Remotes, and Pull Requests",
          "subtopics": [
            "git remote add origin",
            "git push -u origin main",
            "git clone",
            "Pull Requests (PRs)",
            "Professional README creation"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Beginner",
          "whatIsIt": "Cloud hosting platform for Git repositories providing code review tools, issue tracking, and automated CI/CD pipelines.",
          "whyDoWeNeedIt": "Showcases your portfolio to recruiters and enables team code reviews via Pull Requests.",
          "whenToUseIt": "For every project intended for your professional portfolio.",
          "codeExample": "git remote add origin https://github.com/username/repository.git\ngit branch -M main\ngit push -u origin main",
          "commonMistakes": "Pushing empty or vague README files that do not explain how to configure and run the project.",
          "miniExercise": "Create a GitHub repository, open a Pull Request with description and screenshots, and merge it.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Push local repositories to GitHub remotes",
              "completed": false
            },
            {
              "text": "Write professional README files with setup steps and architecture",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p15-e1",
          "title": "Open Source Simulation",
          "description": "Fork a repository, create a feature branch, commit changes, and submit a clean Pull Request.",
          "completed": false
        }
      ],
      "notes": "A clean GitHub commit history is one of the first things a hiring manager reviews.",
      "resources": [
        {
          "id": "p15-r1",
          "title": "Git Documentation & Book",
          "url": "https://git-scm.com/book/en/v2",
          "type": "Book"
        }
      ]
    },
    {
      "id": "phase-16",
      "number": 16,
      "title": "HTML Fundamentals",
      "shortDescription": "Semantic HTML5, document structure, forms, inputs, tables, and web accessibility fundamentals.",
      "difficulty": "Beginner",
      "estimatedHours": 15,
      "technologies": [
        "HTML5",
        "Accessibility (a11y)"
      ],
      "prerequisites": [
        "phase-0"
      ],
      "learningObjectives": [
        "Structure web documents using semantic HTML5 elements (header, nav, main, section, article, footer).",
        "Construct robust HTML forms with input validation attributes (required, pattern, type).",
        "Build accessible tables for tabular data.",
        "Adhere to accessibility standards with proper label associations and alt attributes."
      ],
      "topics": [
        {
          "id": "p16-t1",
          "title": "Semantic HTML5 Structure",
          "subtopics": [
            "DOCTYPE, html, head, body",
            "header, nav, main, section, article, aside, footer",
            "Headings (h1 to h6) hierarchy",
            "Paragraphs, lists, links, images"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 5,
          "difficulty": "Beginner",
          "whatIsIt": "Using HTML markup that reinforces the meaning and role of the information in web pages rather than just defining its presentation.",
          "whyDoWeNeedIt": "Improves screen reader accessibility, search engine indexing (SEO), and provides clear component boundaries for Angular.",
          "whenToUseIt": "In every web template and Angular component template.",
          "codeExample": "<header>\n  <nav aria-label=\"Main Navigation\">\n    <a href=\"/dashboard\">Dashboard</a>\n    <a href=\"/products\">Products</a>\n  </nav>\n</header>\n<main>\n  <section aria-labelledby=\"heading-products\">\n    <h1 id=\"heading-products\">Product Catalog</h1>\n    <p>Manage and review inventory items.</p>\n  </section>\n</main>",
          "commonMistakes": "Using <div> for everything instead of semantic tags like <main>, <nav>, or <button>.",
          "miniExercise": "Build a semantic, accessible web page layout containing header, navigation, article, and footer.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Use semantic tags instead of generic divs",
              "completed": false
            },
            {
              "text": "Maintain single h1 per page and proper heading nesting",
              "completed": false
            }
          ]
        },
        {
          "id": "p16-t2",
          "title": "HTML Forms and Validation",
          "subtopics": [
            "<form> action & method",
            "<input> types (text, email, number, password, date)",
            "<label for=\"\"> association",
            "select, option, textarea",
            "Validation attributes (required, min, max, pattern)"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Beginner",
          "whatIsIt": "Interactive controls that collect user input and submit it to a server or frontend JavaScript handler.",
          "whyDoWeNeedIt": "Every CRUD application relies on forms for user registration, data entry, and filtering.",
          "whenToUseIt": "Forms form the foundation of Angular reactive forms.",
          "codeExample": "<form id=\"productForm\">\n  <div>\n    <label for=\"productName\">Product Name</label>\n    <input type=\"text\" id=\"productName\" name=\"name\" required minlength=\"3\" />\n  </div>\n  <div>\n    <label for=\"price\">Price ($)</label>\n    <input type=\"number\" id=\"price\" name=\"price\" step=\"0.01\" min=\"0.01\" required />\n  </div>\n  <button type=\"submit\">Save Product</button>\n</form>",
          "commonMistakes": "Omitting <label> tags or failing to associate them with input IDs via the 'for' attribute.",
          "miniExercise": "Construct a complete registration form with email, password, confirm password, age, and terms agreement.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Always pair inputs with associated labels",
              "completed": false
            },
            {
              "text": "Use native HTML5 input types for mobile keyboards (email, number, tel)",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p16-e1",
          "title": "Accessible Product Form Layout",
          "description": "Build a semantic, accessible product management form layout with proper labeling.",
          "completed": false
        }
      ],
      "notes": "Clean semantic HTML is the bedrock upon which Angular components and accessible UIs are built.",
      "resources": [
        {
          "id": "p16-r1",
          "title": "MDN HTML Documentation",
          "url": "https://developer.mozilla.org/en-US/docs/Web/HTML",
          "type": "Documentation"
        }
      ]
    },
    {
      "id": "phase-17",
      "number": 17,
      "title": "CSS & Responsive Design",
      "shortDescription": "Box model, Flexbox, CSS Grid, media queries, typography, spacing tokens, and responsive mobile-first layouts.",
      "difficulty": "Beginner",
      "estimatedHours": 25,
      "technologies": [
        "CSS3",
        "Flexbox",
        "CSS Grid",
        "Media Queries"
      ],
      "prerequisites": [
        "phase-16"
      ],
      "learningObjectives": [
        "Master the CSS Box Model (content, padding, border, margin) and box-sizing: border-box.",
        "Build flexible 1D layouts using Flexbox (justify-content, align-items, flex-direction).",
        "Construct complex 2D dashboard grids using CSS Grid.",
        "Implement responsive mobile-first layouts using CSS media queries.",
        "Create modern, clean user interfaces without relying on heavy styling bloat."
      ],
      "topics": [
        {
          "id": "p17-t1",
          "title": "Box Model and Layout Fundamentals",
          "subtopics": [
            "content, padding, border, margin",
            "box-sizing: border-box reset",
            "display: block, inline, inline-block, none",
            "position: static, relative, absolute, fixed, sticky"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Beginner",
          "whatIsIt": "The foundational layout engine determining how HTML elements occupy space and interact with neighbors.",
          "whyDoWeNeedIt": "Understanding the box model prevents unexpected width overflows and spacing defects.",
          "whenToUseIt": "In all CSS styling.",
          "codeExample": "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.card {\n  padding: 16px;\n  border: 1px solid var(--border-color);\n  margin-bottom: 24px;\n}",
          "commonMistakes": "Not applying box-sizing: border-box globally, causing elements with padding to overflow their parent containers.",
          "miniExercise": "Build a card component and inspect its exact dimensions using the browser developer tools box model visualizer.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Apply global box-sizing: border-box reset",
              "completed": false
            },
            {
              "text": "Understand margin collapsing rules",
              "completed": false
            }
          ]
        },
        {
          "id": "p17-t2",
          "title": "Flexbox Layout Engine",
          "subtopics": [
            "display: flex",
            "flex-direction (row, column)",
            "justify-content (main axis)",
            "align-items (cross axis)",
            "gap property",
            "flex-wrap"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 7,
          "difficulty": "Beginner",
          "whatIsIt": "A one-dimensional layout model for aligning items in rows or columns with dynamic space distribution.",
          "whyDoWeNeedIt": "Solves centering, navigation bar alignment, and toolbars effortlessly without float hacks.",
          "whenToUseIt": "Use for navigation bars, buttons inside cards, form input rows, and list alignments.",
          "codeExample": ".navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  gap: 16px;\n}",
          "commonMistakes": "Confusing the main axis (justify-content) with the cross axis (align-items) when flex-direction is column.",
          "miniExercise": "Build a responsive navigation bar with a logo on the left and navigation links and buttons aligned to the right.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Align items along main and cross axes with ease",
              "completed": false
            },
            {
              "text": "Use gap property instead of individual margins",
              "completed": false
            }
          ]
        },
        {
          "id": "p17-t3",
          "title": "CSS Grid and Responsive Dashboards",
          "subtopics": [
            "display: grid",
            "grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))",
            "gap",
            "Media queries (@media (min-width: 768px))",
            "Mobile-first design"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Intermediate",
          "whatIsIt": "A two-dimensional layout system for CSS, handling both columns and rows simultaneously.",
          "whyDoWeNeedIt": "Perfect for responsive dashboard cards that automatically reflow across desktop, tablet, and mobile screens.",
          "whenToUseIt": "For main application shells, metric card grids, and gallery views.",
          "codeExample": ".dashboard-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n}\n\n@media (max-width: 768px) {\n  .sidebar {\n    display: none; /* Collapsed mobile menu */\n  }\n}",
          "commonMistakes": "Writing dozens of manual media query breakpoints when CSS Grid auto-fit minmax achieves the same result automatically.",
          "miniExercise": "Build a 4-card metric dashboard that reflows from 4 columns on desktop to 2 on tablet to 1 on mobile.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Use CSS Grid repeat and minmax for responsive card grids",
              "completed": false
            },
            {
              "text": "Design mobile-first layouts using min-width media queries",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p17-e1",
          "title": "Responsive Developer Dashboard Layout",
          "description": "Build a complete responsive dashboard layout with sidebar, header, and card grid.",
          "completed": false
        }
      ],
      "notes": "Adherence to clean CSS tokens and responsive layout principles creates a professional user experience.",
      "resources": [
        {
          "id": "p17-r1",
          "title": "A Complete Guide to Flexbox",
          "url": "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
          "type": "Article"
        }
      ]
    },
    {
      "id": "phase-18",
      "number": 18,
      "title": "JavaScript Fundamentals (ES6+)",
      "shortDescription": "Modern JavaScript, ES6 features, DOM manipulation, asynchronous JavaScript (Promises, async/await), and Fetch API.",
      "difficulty": "Intermediate",
      "estimatedHours": 35,
      "technologies": [
        "JavaScript (ES6+)",
        "Fetch API",
        "DOM",
        "TypeScript Basics"
      ],
      "prerequisites": [
        "phase-16"
      ],
      "learningObjectives": [
        "Master modern ES6 syntax (let, const, arrow functions, destructuring, spread).",
        "Manipulate the DOM dynamically using document.querySelector and event listeners.",
        "Understand asynchronous JavaScript, the event loop, Promises, and async/await.",
        "Make HTTP API calls to backend endpoints using the Fetch API.",
        "Handle JSON responses and error states gracefully."
      ],
      "topics": [
        {
          "id": "p18-t1",
          "title": "Modern ES6 Syntax and Data Structures",
          "subtopics": [
            "let vs const (never use var)",
            "Arrow functions",
            "Template literals (`${}`)",
            "Destructuring arrays and objects",
            "Spread & Rest operators (...)",
            "ES Modules (import/export)"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Beginner",
          "whatIsIt": "Modern ECMAScript language enhancements that make JavaScript clean, expressive, and predictable.",
          "whyDoWeNeedIt": "Modern frontend frameworks like Angular are built entirely on ES6+ and TypeScript standards.",
          "whenToUseIt": "In all JavaScript and TypeScript development.",
          "codeExample": "const user = { id: 10, name: \"Leila\", role: \"Developer\" };\nconst { name, role } = user; // Destructuring\n\nconst numbers = [1, 2, 3];\nconst updatedNumbers = [...numbers, 4]; // Spread operator\n\nconst greet = (person) => `Hello, ${person.name}!`;",
          "commonMistakes": "Using var, which causes variable hoisting bugs across function scopes.",
          "miniExercise": "Refactor legacy ES5 JavaScript code using arrow functions, destructuring, and template literals.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Always declare variables with const by default, let when reassigned",
              "completed": false
            },
            {
              "text": "Use array and object destructuring cleanly",
              "completed": false
            },
            {
              "text": "Export and import modules using ES6 syntax",
              "completed": false
            }
          ]
        },
        {
          "id": "p18-t2",
          "title": "DOM Manipulation and Events",
          "subtopics": [
            "document.querySelector & querySelectorAll",
            "addEventListener ('click', 'submit')",
            "Manipulating element classes and styles",
            "Event bubbling and preventDefault()"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 7,
          "difficulty": "Beginner",
          "whatIsIt": "The Document Object Model (DOM) is an object-oriented representation of the web page that JavaScript can inspect and modify.",
          "whyDoWeNeedIt": "Enables responding to user clicks, input changes, and updating the UI dynamically without refreshing the page.",
          "whenToUseIt": "Every interactive UI interaction.",
          "codeExample": "const submitBtn = document.querySelector(\"#submitBtn\");\nsubmitBtn.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n  const input = document.querySelector(\"#itemName\");\n  console.log(\"Adding item:\", input.value);\n});",
          "commonMistakes": "Forgetting event.preventDefault() on form submit buttons, causing the browser to reload the page.",
          "miniExercise": "Build an interactive Todo list where items can be added, marked completed, and removed from the DOM.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Query elements efficiently with querySelector",
              "completed": false
            },
            {
              "text": "Attach event listeners and handle event objects",
              "completed": false
            }
          ]
        },
        {
          "id": "p18-t3",
          "title": "Asynchronous JavaScript, Promises, and Fetch API",
          "subtopics": [
            "Event loop and call stack",
            "Promises (resolve, reject)",
            "async / await syntax in JS",
            "fetch() API",
            "Handling HTTP errors and response.json()"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 12,
          "difficulty": "Intermediate",
          "whatIsIt": "Non-blocking JavaScript operations that allow web pages to fetch data from remote APIs in the background.",
          "whyDoWeNeedIt": "Essential for communicating with your ASP.NET Core Web API endpoints without blocking the user interface.",
          "whenToUseIt": "Whenever sending or receiving data over the network.",
          "codeExample": "async function fetchProducts() {\n  try {\n    const response = await fetch(\"https://api.example.com/products\");\n    if (!response.ok) throw new Error(`HTTP error ${response.status}`);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error(\"Fetch failed:\", error);\n    throw error;\n  }\n}",
          "commonMistakes": "Forgetting that fetch does not reject on 4xx/5xx HTTP errors; you must explicitly check response.ok.",
          "miniExercise": "Build a script that fetches data from a mock REST API and displays results in an HTML table with error handling.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Consume APIs using async/await and fetch()",
              "completed": false
            },
            {
              "text": "Check response.ok before attempting to parse JSON",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p18-e1",
          "title": "Interactive Product Catalog",
          "description": "Build a vanilla JavaScript app that fetches products from a mock API, filters, and renders dynamically.",
          "completed": false
        }
      ],
      "notes": "Never jump directly into Angular without having a solid understanding of modern JavaScript and Promises.",
      "resources": [
        {
          "id": "p18-r1",
          "title": "JavaScript.info — The Modern JavaScript Tutorial",
          "url": "https://javascript.info/",
          "type": "Tutorial"
        }
      ]
    },
    {
      "id": "phase-19",
      "number": 19,
      "title": "Angular Fundamentals",
      "shortDescription": "Components, data binding, directives, services, dependency injection, routing, Reactive Forms, and RxJS.",
      "difficulty": "Intermediate",
      "estimatedHours": 45,
      "technologies": [
        "Angular",
        "TypeScript",
        "RxJS",
        "Angular CLI"
      ],
      "prerequisites": [
        "phase-16",
        "phase-17",
        "phase-18"
      ],
      "learningObjectives": [
        "Create modular Angular applications using Angular CLI and standalone components.",
        "Master data binding (interpolation, property binding, event binding, two-way binding).",
        "Use structural and attribute directives (@if, @for, ngClass).",
        "Manage shared business state and API communications using Angular Services and DI.",
        "Implement Single Page Application routing with route parameters and guards.",
        "Build robust forms with ReactiveFormsModule and custom validators.",
        "Consume asynchronous streams using RxJS observables and operators."
      ],
      "topics": [
        {
          "id": "p19-t1",
          "title": "Angular Architecture and Components",
          "subtopics": [
            "Angular CLI (ng new, ng generate)",
            "Standalone components",
            "Component anatomy (@Component, selector, template, styles)",
            "Input and Output properties"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Beginner",
          "whatIsIt": "Components are the fundamental UI building blocks of Angular applications, combining an HTML template, TypeScript class, and CSS styles.",
          "whyDoWeNeedIt": "Enables modular, reusable, testable UI components that encapsulate their own presentation and behavior.",
          "whenToUseIt": "For every screen, card, modal, or reusable UI control.",
          "codeExample": "@Component({\n  selector: 'app-product-card',\n  standalone: true,\n  template: `\n    <div class=\"card\">\n      <h3>{{ product.name }}</h3>\n      <p>{{ product.price | currency }}</p>\n      <button (click)=\"onSelect()\">Select</button>\n    </div>\n  `\n})\nexport class ProductCardComponent {\n  @Input({ required: true }) product!: Product;\n  @Output() selected = new EventEmitter<Product>();\n  onSelect() { this.selected.emit(this.product); }\n}",
          "commonMistakes": "Putting all UI logic inside a single monolithic app.component instead of creating small reusable components.",
          "miniExercise": "Create a standalone ProductCard component accepting an @Input product and emitting an @Output event.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Generate components using ng generate component",
              "completed": false
            },
            {
              "text": "Communicate between parent and child with @Input and @Output",
              "completed": false
            }
          ]
        },
        {
          "id": "p19-t2",
          "title": "Data Binding and Directives",
          "subtopics": [
            "Interpolation {{ value }}",
            "Property binding [property]=\"value\"",
            "Event binding (event)=\"handler()\"",
            "Two-way binding [(ngModel)]",
            "Control flow (@if, @for, @switch)"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 7,
          "difficulty": "Beginner",
          "whatIsIt": "Mechanisms to synchronize data between the TypeScript component class and the HTML template view automatically.",
          "whyDoWeNeedIt": "Eliminates manual DOM querying and manipulation; when TypeScript state changes, the UI updates automatically.",
          "whenToUseIt": "In all component templates.",
          "codeExample": "@if (isLoading) {\n  <p>Loading products...</p>\n} @else {\n  <ul>\n    @for (item of products; track item.id) {\n      <li>{{ item.name }} - {{ item.price | currency }}</li>\n    }\n  </ul>\n}",
          "commonMistakes": "Forgetting the 'track' expression in modern Angular @for loops, degrading rendering performance.",
          "miniExercise": "Render a list of products with conditional rendering for 'Out of Stock' badges using modern @if and @for.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Use modern Angular @if and @for control flow blocks",
              "completed": false
            },
            {
              "text": "Always provide unique track key in @for loops",
              "completed": false
            }
          ]
        },
        {
          "id": "p19-t3",
          "title": "Angular Services and Dependency Injection",
          "subtopics": [
            "@Injectable({ providedIn: 'root' })",
            "Service responsibility",
            "Injecting services via inject() or constructor",
            "State sharing across components"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 7,
          "difficulty": "Intermediate",
          "whatIsIt": "Classes decorated with @Injectable designed to handle data access, API calls, and business logic outside components.",
          "whyDoWeNeedIt": "Keeps components focused strictly on presentation and allows multiple components to share the same data and operations.",
          "whenToUseIt": "For all HTTP requests, auth state management, and logging in Angular.",
          "codeExample": "@Injectable({ providedIn: 'root' })\nexport class ProductService {\n  private http = inject(HttpClient);\n  private apiUrl = 'http://localhost:5000/api/products';\n\n  getProducts(): Observable<Product[]> {\n    return this.http.get<Product[]>(this.apiUrl);\n  }\n}",
          "commonMistakes": "Performing HTTP calls directly inside component lifecycle hooks instead of delegating to a service.",
          "miniExercise": "Build an AuthService storing current user state and inject it into a header component.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Register singleton services with providedIn: 'root'",
              "completed": false
            },
            {
              "text": "Inject dependencies using inject() function or constructor",
              "completed": false
            }
          ]
        },
        {
          "id": "p19-t4",
          "title": "Angular Routing and Route Guards",
          "subtopics": [
            "Routes configuration",
            "<router-outlet>",
            "routerLink and routerLinkActive",
            "Route parameters (/:id)",
            "canActivate Route Guards"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Intermediate",
          "whatIsIt": "Navigation system that renders different component views depending on the browser URL without full page refreshes.",
          "whyDoWeNeedIt": "Creates smooth Single Page Application (SPA) experiences and protects restricted pages from unauthenticated users.",
          "whenToUseIt": "In every multi-page web application.",
          "codeExample": "export const routes: Routes = [\n  { path: '', component: HomeComponent },\n  { path: 'products', component: ProductListComponent },\n  { path: 'products/:id', component: ProductDetailComponent },\n  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },\n  { path: '**', component: NotFoundComponent }\n];",
          "commonMistakes": "Writing traditional href='/' links instead of [routerLink] which causes full browser page reloads.",
          "miniExercise": "Create an authGuard that redirects unauthenticated users to '/login' if no token exists in localStorage.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Define routes with path parameters and wildcards",
              "completed": false
            },
            {
              "text": "Implement functional canActivate route guards",
              "completed": false
            }
          ]
        },
        {
          "id": "p19-t5",
          "title": "Reactive Forms and Validation",
          "subtopics": [
            "ReactiveFormsModule",
            "FormGroup and FormControl",
            "Validators (required, minLength, email)",
            "Custom validators",
            "Displaying validation error messages"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Intermediate",
          "whatIsIt": "A model-driven approach to handling form inputs whose values and validation status are managed programmatically in TypeScript.",
          "whyDoWeNeedIt": "Provides robust, testable, type-safe form validation for complex business entry screens.",
          "whenToUseIt": "Preferred standard for all forms in enterprise Angular applications.",
          "codeExample": "export class ProductFormComponent {\n  private fb = inject(FormBuilder);\n  form = this.fb.group({\n    name: ['', [Validators.required, Validators.minLength(3)]],\n    price: [0, [Validators.required, Validators.min(0.01)]]\n  });\n\n  onSubmit() {\n    if (this.form.valid) {\n      console.log('Valid product:', this.form.value);\n    }\n  }\n}",
          "commonMistakes": "Using template-driven forms for complex forms when Reactive Forms provides superior validation control.",
          "miniExercise": "Build a reactive product form that disables the submit button until all fields pass validation.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Initialize typed FormGroups with FormBuilder",
              "completed": false
            },
            {
              "text": "Display user-friendly validation errors on touched inputs",
              "completed": false
            }
          ]
        },
        {
          "id": "p19-t6",
          "title": "RxJS Basics and Observables",
          "subtopics": [
            "Observable vs Promise",
            "subscribe() and unsubscription",
            "AsyncPipe (| async)",
            "pipe(), map(), catchError()",
            "switchMap for search typeaheads"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 9,
          "difficulty": "Intermediate",
          "whatIsIt": "Reactive Extensions for JavaScript; a library for composing asynchronous and event-based programs using observable sequences.",
          "whyDoWeNeedIt": "HttpClient returns Observables; RxJS operators allow transforming, debouncing, and handling errors elegantly.",
          "whenToUseIt": "When consuming API streams, search autocomplete inputs, and event handling.",
          "codeExample": "// Using async pipe in template handles subscription and unsubscription automatically:\nproducts$ = this.productService.getProducts().pipe(\n  catchError(err => {\n    this.errorMessage = 'Failed to load products.';\n    return of([]);\n  })\n);",
          "commonMistakes": "Subscribing manually inside components without unsubscribing, creating memory leaks (prefer AsyncPipe).",
          "miniExercise": "Build an instant search box that debounces input by 300ms and cancels previous pending requests using switchMap.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Transform data streams using pipe and map",
              "completed": false
            },
            {
              "text": "Catch API errors cleanly with catchError",
              "completed": false
            },
            {
              "text": "Prefer the AsyncPipe (| async) in templates",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p19-e1",
          "title": "Product Inventory SPA",
          "description": "Build an Angular SPA with product listing, details view, reactive create form, and routing.",
          "completed": false
        }
      ],
      "notes": "Mastering Angular standalone components and Reactive Forms prepares you for Full Stack integration.",
      "resources": [
        {
          "id": "p19-r1",
          "title": "Angular Official Documentation",
          "url": "https://angular.dev",
          "type": "Documentation"
        }
      ]
    },
    {
      "id": "phase-20",
      "number": 20,
      "title": "Full Stack Integration (Angular + .NET)",
      "shortDescription": "Connecting Angular HttpClient to ASP.NET Core Web API, HTTP interceptors, JWT handling, and end-to-end CRUD.",
      "difficulty": "Advanced",
      "estimatedHours": 45,
      "technologies": [
        "Angular",
        "ASP.NET Core",
        "HttpClient",
        "HttpInterceptor",
        "JWT"
      ],
      "prerequisites": [
        "phase-10",
        "phase-12",
        "phase-19"
      ],
      "learningObjectives": [
        "Connect Angular HttpClient to ASP.NET Core endpoints over HTTP/HTTPS.",
        "Implement an HttpInterceptor to automatically attach JWT Bearer tokens to outgoing requests.",
        "Handle 401 Unauthorized and 403 Forbidden globally in Angular interceptors.",
        "Synchronize TypeScript models with C# DTO contracts.",
        "Build complete end-to-end CRUD features with loading states and error notifications."
      ],
      "topics": [
        {
          "id": "p20-t1",
          "title": "Connecting Angular to ASP.NET Core",
          "subtopics": [
            "environment.ts configuration",
            "API base URLs",
            "provideHttpClient()",
            "Handling CORS during development",
            "Syncing C# DTOs with TypeScript interfaces"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Intermediate",
          "whatIsIt": "Establishing reliable network communication between the Angular frontend application and the ASP.NET Core backend server.",
          "whyDoWeNeedIt": "Unifies the two halves of a Full Stack application into a single cohesive solution.",
          "whenToUseIt": "In all Full Stack .NET + Angular projects.",
          "codeExample": "// Angular environment:\nexport const environment = {\n  production: false,\n  apiUrl: 'https://localhost:7150/api'\n};\n\n// Angular product service:\n@Injectable({ providedIn: 'root' })\nexport class ProductService {\n  private http = inject(HttpClient);\n  private baseUrl = `${environment.apiUrl}/products`;\n\n  getAll(): Observable<Product[]> {\n    return this.http.get<Product[]>(this.baseUrl);\n  }\n}",
          "commonMistakes": "Hardcoding localhost URLs inside individual services instead of using environment configuration files.",
          "miniExercise": "Configure Angular environment files and connect to a running local ASP.NET Core API.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Configure environment.ts for local dev and production API URLs",
              "completed": false
            },
            {
              "text": "Create matching TypeScript interfaces for every C# DTO",
              "completed": false
            }
          ]
        },
        {
          "id": "p20-t2",
          "title": "JWT Authentication Flow and HTTP Interceptors",
          "subtopics": [
            "Functional HttpInterceptor",
            "Attaching Authorization: Bearer <token>",
            "Storing tokens safely",
            "Handling 401 Unauthorized redirects",
            "Logging out on token expiry"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 12,
          "difficulty": "Advanced",
          "whatIsIt": "An Angular interceptor that intercepts every outgoing HTTP request to attach the user's JWT token and inspects responses for authentication failures.",
          "whyDoWeNeedIt": "Eliminates passing auth headers manually in every single service method.",
          "whenToUseIt": "In all applications with user login and authenticated API endpoints.",
          "codeExample": "export const authInterceptor: HttpInterceptorFn = (req, next) => {\n  const token = localStorage.getItem('auth_token');\n  if (token) {\n    req = req.clone({\n      setHeaders: { Authorization: `Bearer ${token}` }\n    });\n  }\n  return next(req);\n};",
          "commonMistakes": "Mutating the original HttpRequest object directly instead of using req.clone().",
          "miniExercise": "Implement an auth interceptor that attaches tokens and redirects users to /login on 401 errors.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Clone request and attach Bearer token in functional interceptor",
              "completed": false
            },
            {
              "text": "Handle 401 Unauthorized errors by redirecting to login",
              "completed": false
            }
          ]
        },
        {
          "id": "p20-t3",
          "title": "Complete End-to-End CRUD Integration",
          "subtopics": [
            "List view with loading spinner",
            "Create modal/form with validation",
            "Edit with pre-filled form",
            "Delete with confirmation dialog",
            "Optimistic vs Pessimistic UI updates"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 15,
          "difficulty": "Intermediate",
          "whatIsIt": "Building the full cycle: User clicks in Angular -> HTTP request -> Controller -> Service -> EF Core -> SQL Server -> response -> Angular UI update.",
          "whyDoWeNeedIt": "This is the primary core responsibility of a professional Junior Full Stack developer.",
          "whenToUseIt": "In all core business modules.",
          "codeExample": "deleteProduct(id: number) {\n  if (!confirm('Are you sure you want to delete this product?')) return;\n  this.productService.delete(id).subscribe({\n    next: () => {\n      this.products = this.products.filter(p => p.id !== id);\n      this.showToast('Product deleted successfully.');\n    },\n    error: (err) => this.showToast('Failed to delete product.')\n  });\n}",
          "commonMistakes": "Failing to show loading states and error messages, leaving the user confused if an operation takes time.",
          "miniExercise": "Build complete end-to-end CRUD for an inventory item with loading states and error feedback.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Implement full Create, Read, Update, Delete flows",
              "completed": false
            },
            {
              "text": "Display loading indicators during asynchronous operations",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p20-e1",
          "title": "Full Stack Task Manager",
          "description": "Build Angular UI + ASP.NET Core Web API + SQL Server database with JWT auth and complete CRUD.",
          "completed": false
        }
      ],
      "notes": "Completing this phase represents reaching the true Full Stack milestone.",
      "resources": [
        {
          "id": "p20-r1",
          "title": "Angular HttpClient Guide",
          "url": "https://angular.dev/guide/http",
          "type": "Documentation"
        }
      ]
    },
    {
      "id": "phase-21",
      "number": 21,
      "title": "Real-World API Features",
      "shortDescription": "Pagination, searching, filtering, sorting, performance optimization, and avoiding N+1 database bottlenecks.",
      "difficulty": "Intermediate",
      "estimatedHours": 30,
      "technologies": [
        "ASP.NET Core",
        "EF Core",
        "LINQ",
        "IQueryable"
      ],
      "prerequisites": [
        "phase-10",
        "phase-20"
      ],
      "learningObjectives": [
        "Implement server-side pagination with page and pageSize parameters.",
        "Build dynamic searching and multi-column filtering using IQueryable.",
        "Implement dynamic sorting based on incoming query strings.",
        "Return paginated metadata headers or envelope objects (TotalCount, TotalPages).",
        "Diagnose and resolve database query performance bottlenecks."
      ],
      "topics": [
        {
          "id": "p21-t1",
          "title": "Server-Side Pagination",
          "subtopics": [
            "Skip() and Take()",
            "PagedResult<T> envelope",
            "TotalCount and TotalPages calculation",
            "Preventing memory exhaustion on large datasets"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Intermediate",
          "whatIsIt": "Fetching only a specific slice of database records (e.g. 20 records at a time) matching the requested page index.",
          "whyDoWeNeedIt": "Returning 100,000 records in one API call crashes the server, exhausts bandwidth, and freezes the client browser.",
          "whenToUseIt": "On all list endpoints returning collections that can grow over time.",
          "codeExample": "public async Task<PagedResult<ProductDto>> GetPagedAsync(int page = 1, int pageSize = 10)\n{\n    var query = _context.Products.AsNoTracking();\n    int totalCount = await query.CountAsync();\n    \n    var items = await query\n        .Skip((page - 1) * pageSize)\n        .Take(pageSize)\n        .Select(p => new ProductDto(p.Id, p.Name, p.Price))\n        .ToListAsync();\n\n    return new PagedResult<ProductDto>(items, totalCount, page, pageSize);\n}",
          "commonMistakes": "Executing Skip and Take in memory after calling ToList() instead of executing it on the SQL server via IQueryable.",
          "miniExercise": "Build a reusable PagedResult<T> class and implement server-side pagination for products.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Apply Skip and Take directly to IQueryable before materialization",
              "completed": false
            },
            {
              "text": "Cap maximum allowed pageSize to prevent client abuse",
              "completed": false
            }
          ]
        },
        {
          "id": "p21-t2",
          "title": "Searching and Multi-field Filtering",
          "subtopics": [
            "Composing IQueryable queries conditionally",
            "Case-insensitive searching",
            "Filtering by date ranges, status, categories",
            "Query parameter DTOs"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Intermediate",
          "whatIsIt": "Allowing clients to narrow down query results by supplying optional search keywords and filter criteria.",
          "whyDoWeNeedIt": "Enables users to find specific records quickly in large business databases.",
          "whenToUseIt": "In all search bars, filter sidebars, and catalog views.",
          "codeExample": "public async Task<List<ProductDto>> SearchAsync(ProductQueryParameters param)\n{\n    var query = _context.Products.AsNoTracking();\n\n    if (!string.IsNullOrWhiteSpace(param.SearchTerm))\n        query = query.Where(p => p.Name.Contains(param.SearchTerm));\n\n    if (param.MinPrice.HasValue)\n        query = query.Where(p => p.Price >= param.MinPrice.Value);\n\n    return await query.Select(p => new ProductDto(p.Id, p.Name, p.Price)).ToListAsync();\n}",
          "commonMistakes": "Executing multiple separate queries and intersecting them in memory instead of chaining Where clauses on IQueryable.",
          "miniExercise": "Build an API endpoint accepting an object with SearchTerm, CategoryId, MinPrice, and MaxPrice parameters.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Chain Where filters dynamically on IQueryable",
              "completed": false
            },
            {
              "text": "Bundle query parameters into a clean parameter class",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p21-e1",
          "title": "Full-Featured Catalog Query API",
          "description": "Build an API endpoint supporting combined pagination, searching, filtering, and sorting.",
          "completed": false
        }
      ],
      "notes": "Server-side pagination and filtering are mandatory requirements for any enterprise web application.",
      "resources": [
        {
          "id": "p21-r1",
          "title": "Pagination in ASP.NET Core Web API",
          "url": "https://code-maze.com/paging-in-aspnet-core-webapi/",
          "type": "Article"
        }
      ]
    },
    {
      "id": "phase-22",
      "number": 22,
      "title": "Security Basics",
      "shortDescription": "SQL Injection defense, XSS, CSRF, secure password handling, sensitive config protection, and input sanitization.",
      "difficulty": "Intermediate",
      "estimatedHours": 20,
      "technologies": [
        "OWASP Top 10",
        "HTTPS",
        "Data Protection"
      ],
      "prerequisites": [
        "phase-10",
        "phase-12"
      ],
      "learningObjectives": [
        "Understand and prevent the OWASP Top 10 security vulnerabilities.",
        "Prevent SQL Injection by using parameterized queries and EF Core.",
        "Prevent Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).",
        "Store sensitive connection strings and credentials securely.",
        "Enforce HTTPS and secure HTTP response headers."
      ],
      "topics": [
        {
          "id": "p22-t1",
          "title": "SQL Injection Prevention",
          "subtopics": [
            "How SQL Injection occurs",
            "Parameterized queries in T-SQL",
            "How EF Core automatically parameterizes LINQ queries",
            "Risks of raw string concatenation in FromSqlRaw"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Beginner",
          "whatIsIt": "A code injection technique where malicious SQL statements are inserted into entry fields for execution by the database.",
          "whyDoWeNeedIt": "SQL injection can destroy, leak, or alter the entire database.",
          "whenToUseIt": "In all database querying code.",
          "codeExample": "// Vulnerable (Dangerous SQL Injection risk):\nvar sql = $\"SELECT * FROM Users WHERE Email = '{userInput}'\";\n_context.Database.ExecuteSqlRaw(sql);\n\n// Safe (Parameterized query):\nvar user = await _context.Users\n    .FromSqlInterpolated($\"SELECT * FROM Users WHERE Email = {userInput}\")\n    .FirstOrDefaultAsync();",
          "commonMistakes": "Concatenating user input directly into raw SQL strings.",
          "miniExercise": "Demonstrate why a concatenated SQL query fails when inputting \"admin' OR '1'='1\" and rewrite it safely.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Always use parameterized queries or standard LINQ",
              "completed": false
            },
            {
              "text": "Never concatenate raw strings into SQL statements",
              "completed": false
            }
          ]
        },
        {
          "id": "p22-t2",
          "title": "XSS and CSRF Protection",
          "subtopics": [
            "Cross-Site Scripting (XSS) types",
            "HTML sanitization",
            "How Angular sanitizes templates automatically",
            "CSRF in cookie auth vs stateless JWT"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Intermediate",
          "whatIsIt": "XSS injects malicious client-side scripts into viewed web pages; CSRF tricks an authenticated browser into submitting unauthorized requests.",
          "whyDoWeNeedIt": "Protects user browser sessions and prevents theft of auth tokens and credentials.",
          "whenToUseIt": "In all frontend rendering and API authentication design.",
          "codeExample": "// Angular automatically sanitizes values bound via interpolation {{ }} or [property].\n// Avoid bypassing security with bypassSecurityTrustHtml unless absolutely verified!",
          "commonMistakes": "Using innerHTML with unsanitized user content in frontend JavaScript.",
          "miniExercise": "Audit an Angular component to ensure no unescaped user HTML is injected into the DOM.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Rely on Angular automatic context-aware escaping",
              "completed": false
            },
            {
              "text": "Understand why stateless JWT in Authorization header is immune to CSRF",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p22-e1",
          "title": "API Security Audit",
          "description": "Audit a Web API for SQL injection risks, CORS misconfigurations, and sensitive data leakage.",
          "completed": false
        }
      ],
      "notes": "Demonstrating security awareness during interview questions highlights maturity beyond basic coding.",
      "resources": [
        {
          "id": "p22-r1",
          "title": "OWASP Top 10 Web Application Security Risks",
          "url": "https://owasp.org/www-project-top-ten/",
          "type": "Documentation"
        }
      ]
    },
    {
      "id": "phase-23",
      "number": 23,
      "title": "Deployment & DevOps Basics",
      "shortDescription": "Publishing .NET apps, production configurations, cloud database hosting, Angular build optimization, and HTTPS.",
      "difficulty": "Intermediate",
      "estimatedHours": 25,
      "technologies": [
        "dotnet publish",
        "Docker Basics",
        "Cloud Hosting",
        "CI/CD Overview"
      ],
      "prerequisites": [
        "phase-10",
        "phase-19",
        "phase-20"
      ],
      "learningObjectives": [
        "Publish compiled .NET Web APIs using dotnet publish -c Release.",
        "Build production-ready optimized Angular bundles using ng build.",
        "Configure production environment variables and connection strings.",
        "Deploy a backend API and SQL Server database to cloud hosting.",
        "Deploy an Angular SPA to static hosting (Netlify, Vercel, or Azure Static Web Apps) with HTTPS."
      ],
      "topics": [
        {
          "id": "p23-t1",
          "title": "Publishing and Production Builds",
          "subtopics": [
            "dotnet publish -c Release",
            "Framework-dependent vs Self-contained",
            "Angular production build (ng build)",
            "Minification, tree-shaking, and bundling"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 6,
          "difficulty": "Beginner",
          "whatIsIt": "Compiling and optimizing application source code into standalone deployment packages ready to run on production servers.",
          "whyDoWeNeedIt": "Development builds contain debug symbols and unminified files that are slow and insecure for production use.",
          "whenToUseIt": "Whenever shipping an application to staging or production.",
          "codeExample": "# Publish ASP.NET Core Web API\ndotnet publish -c Release -o ./publish\n\n# Build Angular for production\nng build --configuration production",
          "commonMistakes": "Deploying development builds with debug symbols and unoptimized bundle sizes to production.",
          "miniExercise": "Run a release publish of both backend and frontend, and inspect the resulting output folder sizes.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Generate release builds with dotnet publish",
              "completed": false
            },
            {
              "text": "Verify Angular production build output in dist/ folder",
              "completed": false
            }
          ]
        },
        {
          "id": "p23-t2",
          "title": "Hosting and Environment Configuration",
          "subtopics": [
            "Production connection strings",
            "Environment variables override",
            "Cloud hosting options (Azure, Render, Railway, AWS)",
            "Frontend static hosting",
            "Custom domains and HTTPS"
          ],
          "status": "not-started",
          "reviewStatus": "none",
          "estimatedHours": 8,
          "difficulty": "Intermediate",
          "whatIsIt": "Configuring cloud servers to run the compiled backend, database, and frontend securely over HTTPS.",
          "whyDoWeNeedIt": "A project running only on localhost is invisible to recruiters and potential employers.",
          "whenToUseIt": "For every portfolio project.",
          "codeExample": "// Production environment variable override:\n// ASPNETCORE_ENVIRONMENT=Production\n// ConnectionStrings__DefaultConnection=\"Server=tcp:db.cloud.com;Database=StoreDb;...\"",
          "commonMistakes": "Hardcoding localhost API URLs into the deployed Angular frontend.",
          "miniExercise": "Deploy a live full-stack demo application with backend API and frontend hosted on separate cloud platforms.",
          "mastery": {
            "understandConcept": false,
            "writeExample": false,
            "solveExercise": false,
            "explainWithoutNotes": false,
            "usedInProject": false,
            "debugProblem": false
          },
          "checklist": [
            {
              "text": "Configure cloud database connection strings via environment variables",
              "completed": false
            },
            {
              "text": "Ensure full-stack application operates seamlessly over HTTPS",
              "completed": false
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "p23-e1",
          "title": "Live Portfolio Deployment",
          "description": "Deploy an ASP.NET Core API and Angular frontend to live cloud hosting with HTTPS.",
          "completed": false
        }
      ],
      "notes": "Having a live working URL on your resume instantly puts you ahead of candidates who only have localhost code.",
      "resources": [
        {
          "id": "p23-r1",
          "title": "Host and Deploy ASP.NET Core",
          "url": "https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/",
          "type": "Documentation"
        }
      ]
    }
  ],
  "projects": [
    {
      "id": "project-1",
      "number": 1,
      "title": "Banking & ATM Console Management System",
      "difficulty": "Beginner",
      "status": "not-started",
      "technologies": [
        "C#",
        "OOP",
        "Generic Collections",
        "File I/O",
        "Delegates & Events"
      ],
      "description": "A console banking application implementing account types (Checking, Savings), interest calculations, transaction history logging, PIN authentication, and balance overdraft protections.",
      "features": [
        "Account creation with unique account number generation",
        "PIN-based secure authentication and session handling",
        "Deposit, withdrawal, and fund transfers between accounts",
        "Transaction history auditing with timestamp and transaction IDs",
        "Account type hierarchy (SavingsAccount with interest, CheckingAccount with overdraft)",
        "Data persistence to JSON or local text files",
        "Defensive input validation and structured exception handling"
      ],
      "architecture": "Clean OOP separation: Domain entities (Account, Transaction), Manager services, and Console Presentation layer.",
      "githubUrl": "",
      "deploymentStatus": "Not Deployed",
      "tasks": [
        {
          "id": "p1-t1",
          "title": "Design Account base class with Encapsulation and virtual methods",
          "completed": false
        },
        {
          "id": "p1-t2",
          "title": "Implement SavingsAccount and CheckingAccount derived classes",
          "completed": false
        },
        {
          "id": "p1-t3",
          "title": "Create BankManager service using Dictionary<string, Account>",
          "completed": false
        },
        {
          "id": "p1-t4",
          "title": "Implement File I/O persistence to load and save accounts on exit",
          "completed": false
        },
        {
          "id": "p1-t5",
          "title": "Write unit tests validating deposit, withdrawal, and transfer limits",
          "completed": false
        }
      ]
    },
    {
      "id": "project-2",
      "number": 2,
      "title": "University Course & Student Registration REST API",
      "difficulty": "Intermediate",
      "status": "not-started",
      "technologies": [
        "C#",
        "ASP.NET Core Web API",
        "SQL Server",
        "EF Core",
        "FluentValidation",
        "Swagger"
      ],
      "description": "A relational RESTful backend API managing university faculties, departments, courses, students, and course enrollment capacity with prerequisites.",
      "entities": [
        "Student",
        "Course",
        "Department",
        "Instructor",
        "Enrollment"
      ],
      "features": [
        "Full CRUD endpoints for Students, Instructors, and Courses",
        "Relational One-to-Many and Many-to-Many mappings via EF Core Fluent API",
        "Course enrollment logic validating student credits, capacity, and schedule conflicts",
        "Server-side course search by department, semester, and instructor",
        "Request & Response DTOs with FluentValidation rules",
        "Interactive Swagger OpenAPI documentation with XML summary notes"
      ],
      "architecture": "Layered architecture: Controllers -> Business Services -> EF Core DbContext.",
      "githubUrl": "",
      "deploymentStatus": "Not Deployed",
      "tasks": [
        {
          "id": "p2-t1",
          "title": "Model entities and establish relational keys with Fluent API",
          "completed": false
        },
        {
          "id": "p2-t2",
          "title": "Generate and execute initial EF Core migrations in SQL Server",
          "completed": false
        },
        {
          "id": "p2-t3",
          "title": "Implement enrollment service with capacity and duplicate check logic",
          "completed": false
        },
        {
          "id": "p2-t4",
          "title": "Add Request DTOs and FluentValidation validator classes",
          "completed": false
        },
        {
          "id": "p2-t5",
          "title": "Verify all endpoints with Postman collections and tests",
          "completed": false
        }
      ]
    },
    {
      "id": "project-3",
      "number": 3,
      "title": "Corporate Job Portal & Applicant Tracking API",
      "difficulty": "Intermediate",
      "status": "not-started",
      "technologies": [
        "ASP.NET Core",
        "EF Core",
        "JWT Authentication",
        "Role-Based Authorization",
        "Server-Side Pagination"
      ],
      "description": "An enterprise recruitment portal backend where companies publish job vacancies and job seekers apply with resumes, tracked through recruitment pipelines.",
      "entities": [
        "User",
        "Company",
        "JobListing",
        "Application",
        "ResumeAttachment"
      ],
      "features": [
        "User registration & JWT login with Claims and Roles (Employer, Candidate, Admin)",
        "Password hashing using BCrypt or ASP.NET Core PasswordHasher",
        "Employers can post, edit, archive, and view applicant pipelines",
        "Candidates can search jobs with server-side pagination, salary filters, and location tags",
        "Job application submission with PDF resume upload handling",
        "Global exception handling middleware returning ProblemDetails RFC 7807"
      ],
      "architecture": "Clean layered architecture with custom middleware, JWT authentication handler, and repository abstraction.",
      "githubUrl": "",
      "deploymentStatus": "Not Deployed",
      "tasks": [
        {
          "id": "p3-t1",
          "title": "Configure JWT Authentication and role authorization policies",
          "completed": false
        },
        {
          "id": "p3-t2",
          "title": "Build User and Company registration and authentication endpoints",
          "completed": false
        },
        {
          "id": "p3-t3",
          "title": "Implement paginated job search endpoint using IQueryable Skip/Take",
          "completed": false
        },
        {
          "id": "p3-t4",
          "title": "Create application workflow and status updates (Applied, Reviewed, Rejected, Offered)",
          "completed": false
        },
        {
          "id": "p3-t5",
          "title": "Implement secure file upload handling for candidate CV documents",
          "completed": false
        }
      ]
    },
    {
      "id": "project-4",
      "number": 4,
      "title": "Multi-Vendor E-Commerce Platform Backend",
      "difficulty": "Intermediate",
      "status": "not-started",
      "technologies": [
        "ASP.NET Core",
        "Clean Architecture",
        "EF Core",
        "JWT",
        "Repository & Unit of Work",
        "xUnit & Moq"
      ],
      "description": "A production-grade E-Commerce backend built using Clean Architecture, featuring multi-category product catalog, user shopping carts, atomic checkout, and automated unit tests.",
      "entities": [
        "User",
        "Product",
        "Category",
        "Cart",
        "CartItem",
        "Order",
        "OrderItem",
        "Payment"
      ],
      "features": [
        "Clean Architecture structure (Domain, Application, Infrastructure, Presentation)",
        "Product catalog with faceted searching, category hierarchy, and stock tracking",
        "Persistent shopping cart per authenticated user with session sync",
        "Atomic checkout transaction: verifies stock, creates Order, creates OrderItems, decrements inventory",
        "Repository Pattern with Unit of Work managing database transactions",
        "Unit tests for discount engines and order services using xUnit and Moq",
        "Structured logging with Serilog and Seq sink"
      ],
      "architecture": "Clean Architecture with Dependency Inversion: Domain -> Application -> Infrastructure -> WebApi.",
      "githubUrl": "",
      "deploymentStatus": "Not Deployed",
      "tasks": [
        {
          "id": "p4-t1",
          "title": "Create Clean Architecture 4-project solution structure",
          "completed": false
        },
        {
          "id": "p4-t2",
          "title": "Implement Domain entities and business exceptions",
          "completed": false
        },
        {
          "id": "p4-t3",
          "title": "Build Application services, interfaces, DTOs, and mapping logic",
          "completed": false
        },
        {
          "id": "p4-t4",
          "title": "Implement Infrastructure EF Core DbContext and Unit of Work",
          "completed": false
        },
        {
          "id": "p4-t5",
          "title": "Write comprehensive xUnit test suite for checkout business rules",
          "completed": false
        }
      ]
    },
    {
      "id": "project-5",
      "number": 5,
      "title": "Automotive Service & Workshop Management Platform (Capstone Project)",
      "difficulty": "Advanced",
      "status": "not-started",
      "technologies": [
        "Angular (Standalone)",
        "ASP.NET Core Web API",
        "SQL Server",
        "EF Core",
        "JWT Auth",
        "RxJS",
        "Clean CSS"
      ],
      "description": "The major Full Stack Capstone: a commercial vehicle workshop management platform connecting car owners, technicians, and service managers with appointment booking, repair tracking, and automated invoicing.",
      "entities": [
        "User",
        "Customer",
        "Vehicle",
        "ServicePackage",
        "Appointment",
        "WorkOrder",
        "Part",
        "Invoice",
        "Review"
      ],
      "features": [
        "Customer Portal: vehicle registry, appointment scheduling, live service progress tracker",
        "Service Advisor Dashboard: calendar schedule, technician assignment, work order updates",
        "Technician View: inspection checklists, parts replacement logging, labor hours logging",
        "Billing Engine: automatic calculation of parts cost, labor rate, taxes, and PDF invoice summary",
        "Angular standalone SPA with Reactive Forms, route guards, and functional HTTP interceptors",
        "Live server-side pagination, searching, and status filtering across all tables",
        "Full production deployment to cloud hosting with live URLs and comprehensive documentation"
      ],
      "architecture": "Decoupled Full Stack: Angular 18+ Standalone Client + Clean Architecture ASP.NET Core 8/9 API + SQL Server Database.",
      "githubUrl": "",
      "deploymentStatus": "Not Deployed (Capstone)",
      "tasks": [
        {
          "id": "p5-t1",
          "title": "Design normalized 3NF ERD and database schema in dbdiagram.io",
          "completed": false
        },
        {
          "id": "p5-t2",
          "title": "Build ASP.NET Core Web API backend with JWT and role protection",
          "completed": false
        },
        {
          "id": "p5-t3",
          "title": "Implement appointment booking, work order lifecycle, and billing logic",
          "completed": false
        },
        {
          "id": "p5-t4",
          "title": "Build Angular frontend with standalone components, layout, and routing",
          "completed": false
        },
        {
          "id": "p5-t5",
          "title": "Build reactive booking form with dynamic service package selection",
          "completed": false
        },
        {
          "id": "p5-t6",
          "title": "Connect Angular HttpClient to backend API using auth interceptors",
          "completed": false
        },
        {
          "id": "p5-t7",
          "title": "Write unit tests for critical business calculation logic",
          "completed": false
        },
        {
          "id": "p5-t8",
          "title": "Deploy live backend and frontend to cloud hosting with HTTPS",
          "completed": false
        }
      ]
    }
  ],
  "skills": [
    {
      "id": "sk-1",
      "name": "C# Language & Syntax",
      "category": "Programming",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p0-t1",
        "p1-t1",
        "p1-t4"
      ]
    },
    {
      "id": "sk-2",
      "name": "OOP Principles & SOLID",
      "category": "Architecture",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p2-t1",
        "p2-t4",
        "p2-t6"
      ]
    },
    {
      "id": "sk-3",
      "name": "Asynchronous Programming (TAP)",
      "category": "Programming",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p3-t3",
        "p3-t4"
      ]
    },
    {
      "id": "sk-4",
      "name": "SQL & Relational Databases",
      "category": "Database",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p4-t1",
        "p4-t4",
        "p4-t5"
      ]
    },
    {
      "id": "sk-5",
      "name": "Database Design & Normalization",
      "category": "Database",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p5-t1",
        "p5-t3"
      ]
    },
    {
      "id": "sk-6",
      "name": "LINQ Querying",
      "category": "Programming",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p6-t1",
        "p6-t3"
      ]
    },
    {
      "id": "sk-7",
      "name": "Entity Framework Core",
      "category": "Database",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p7-t1",
        "p7-t3",
        "p7-t5"
      ]
    },
    {
      "id": "sk-8",
      "name": "ASP.NET Core Web API",
      "category": "Backend",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p9-t1",
        "p10-t1",
        "p10-t4"
      ]
    },
    {
      "id": "sk-9",
      "name": "Dependency Injection & Middleware",
      "category": "Backend",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p9-t2",
        "p9-t3"
      ]
    },
    {
      "id": "sk-10",
      "name": "Authentication & JWT",
      "category": "Security",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p12-t1",
        "p12-t2"
      ]
    },
    {
      "id": "sk-11",
      "name": "Error Handling & Logging",
      "category": "Backend",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p13-t1",
        "p13-t2"
      ]
    },
    {
      "id": "sk-12",
      "name": "Automated Testing (xUnit / Moq)",
      "category": "Testing",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p14-t1",
        "p14-t2"
      ]
    },
    {
      "id": "sk-13",
      "name": "Git Version Control",
      "category": "Tools",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p15-t1",
        "p15-t2"
      ]
    },
    {
      "id": "sk-14",
      "name": "HTML5 & Semantic Structure",
      "category": "Frontend",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p16-t1",
        "p16-t2"
      ]
    },
    {
      "id": "sk-15",
      "name": "CSS3 & Responsive Design",
      "category": "Frontend",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p17-t1",
        "p17-t3"
      ]
    },
    {
      "id": "sk-16",
      "name": "JavaScript & ES6+",
      "category": "Frontend",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p18-t1",
        "p18-t3"
      ]
    },
    {
      "id": "sk-17",
      "name": "Angular Framework",
      "category": "Frontend",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p19-t1",
        "p19-t5"
      ]
    },
    {
      "id": "sk-18",
      "name": "Full Stack Integration",
      "category": "Architecture",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p20-t1",
        "p20-t3"
      ]
    },
    {
      "id": "sk-19",
      "name": "Application Security & OWASP",
      "category": "Security",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p22-t1",
        "p22-t2"
      ]
    },
    {
      "id": "sk-20",
      "name": "Production Deployment",
      "category": "DevOps",
      "level": "Beginner",
      "progress": 0,
      "relatedTopics": [
        "p23-t1",
        "p23-t2"
      ]
    }
  ],
  "technologies": [
    {
      "id": "tech-1",
      "name": "C#",
      "category": "Language",
      "status": "Not Started",
      "progress": 0,
      "note": "Solid grasp of modern C# features and asynchronous patterns."
    },
    {
      "id": "tech-2",
      "name": ".NET 8 / 9",
      "category": "Framework",
      "status": "Not Started",
      "progress": 0,
      "note": "Familiar with CLR, unified Program.cs, and performance enhancements."
    },
    {
      "id": "tech-3",
      "name": "ASP.NET Core Web API",
      "category": "Backend",
      "status": "Not Started",
      "progress": 0,
      "note": "Building RESTful controllers, DTOs, and validation pipelines."
    },
    {
      "id": "tech-4",
      "name": "SQL Server & T-SQL",
      "category": "Database",
      "status": "Not Started",
      "progress": 0,
      "note": "Experienced with joins, procedures, transactions, and indexing."
    },
    {
      "id": "tech-5",
      "name": "Entity Framework Core",
      "category": "ORM",
      "status": "Not Started",
      "progress": 0,
      "note": "Fluent API configuration, migrations, and performance projection."
    },
    {
      "id": "tech-6",
      "name": "LINQ",
      "category": "Language Feature",
      "status": "Not Started",
      "progress": 0,
      "note": "Fluent method syntax, deferred execution, and grouping."
    },
    {
      "id": "tech-7",
      "name": "HTML5",
      "category": "Frontend",
      "status": "Not Started",
      "progress": 0,
      "note": "Semantic elements, forms, and accessibility standards."
    },
    {
      "id": "tech-8",
      "name": "CSS3 / Flexbox / Grid",
      "category": "Frontend",
      "status": "Not Started",
      "progress": 0,
      "note": "Responsive layouts, mobile-first design, and clean CSS variables."
    },
    {
      "id": "tech-9",
      "name": "JavaScript ES6+",
      "category": "Language",
      "status": "Not Started",
      "progress": 0,
      "note": "Promises, async/await, modules, and DOM events."
    },
    {
      "id": "tech-10",
      "name": "Angular",
      "category": "Frontend Framework",
      "status": "Not Started",
      "progress": 0,
      "note": "Standalone components, services, and reactive forms."
    },
    {
      "id": "tech-11",
      "name": "Git & GitHub",
      "category": "Tools",
      "status": "Not Started",
      "progress": 0,
      "note": "Branching, pull requests, semantic commits, and merge conflicts."
    },
    {
      "id": "tech-12",
      "name": "Swagger / OpenAPI",
      "category": "Tools",
      "status": "Not Started",
      "progress": 0,
      "note": "API testing, schemas, and XML documentation."
    },
    {
      "id": "tech-13",
      "name": "Postman",
      "category": "Tools",
      "status": "Not Started",
      "progress": 0,
      "note": "Collections, environments, and automated response tests."
    }
  ],
  "interviewQuestions": [
    {
      "id": "iq-1",
      "question": "What is the difference between Value Types and Reference Types in C#?",
      "category": "C# & CLR",
      "difficulty": "Easy",
      "answer": "Value types store data directly in stack memory (e.g. int, double, bool, struct). When assigned, an independent copy of the value is made. Reference types store a pointer on the stack pointing to an object on the managed heap (e.g. string, class, array). Assigning a reference type copies only the memory address.",
      "personalNote": "Stack is fast and auto-collected; heap requires Garbage Collector passes.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-2",
      "question": "What is Boxing and Unboxing in C#, and what is the performance impact?",
      "category": "C# & CLR",
      "difficulty": "Medium",
      "answer": "Boxing converts a value type to type object or an interface, wrapping it in an object allocated on the managed heap. Unboxing extracts the value back onto the stack. Boxing causes extra heap allocation and GC pressure. Generics eliminate boxing.",
      "personalNote": "Always use List<T> instead of ArrayList to eliminate boxing.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-3",
      "question": "What is the difference between struct and class in C#?",
      "category": "C# & CLR",
      "difficulty": "Medium",
      "answer": "A struct is a value type allocated on the stack (unless inside a class), cannot inherit from classes, and should be immutable. A class is a reference type allocated on the heap, supporting full inheritance and GC management. Use struct for small, immutable data under 16 bytes.",
      "personalNote": "Rule of thumb: use struct if size <= 16 bytes and immutable.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-4",
      "question": "Why are strings immutable in C#, and when should you use StringBuilder?",
      "category": "C# & CLR",
      "difficulty": "Medium",
      "answer": "Strings cannot be modified after creation; any modification produces a new heap allocation. This provides thread safety and security. But string concatenation in loops generates thousands of short-lived objects. StringBuilder maintains a mutable buffer to eliminate temporary allocations.",
      "personalNote": "Always use StringBuilder in repetitive loops.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-5",
      "question": "How does the .NET Garbage Collector work and what are its generations?",
      "category": "C# & CLR",
      "difficulty": "Hard",
      "answer": "The .NET GC manages heap memory using three generations: Gen 0 holds short-lived objects (collected most frequently); Gen 1 serves as a buffer; Gen 2 holds long-lived objects (singletons, static data). The Large Object Heap (LOH) holds objects >= 85,000 bytes.",
      "personalNote": "Three phases: Mark, Sweep, and Compact.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-6",
      "question": "What is the difference between Dispose() and Finalize() in C#?",
      "category": "C# & CLR",
      "difficulty": "Medium",
      "answer": "Dispose() (IDisposable) is called deterministically by user code or 'using' to free unmanaged resources (database connections, files) immediately. Finalize() (~Destructor) is called non-deterministically by the GC thread. Implementing finalizers delays memory reclamation.",
      "personalNote": "Call GC.SuppressFinalize(this) in Dispose() to prevent finalizer execution.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-7",
      "question": "What is the 'using' statement in C# and how does it translate behind the scenes?",
      "category": "C# & CLR",
      "difficulty": "Easy",
      "answer": "The using statement guarantees Dispose() is called on an IDisposable object when leaving scope, even upon unhandled exceptions. The compiler translates it into a try...finally block where Dispose() is called inside the finally block.",
      "personalNote": "Modern C# allows 'using var conn = ...;' without extra braces.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-8",
      "question": "What is the difference between const and readonly in C#?",
      "category": "C# & CLR",
      "difficulty": "Medium",
      "answer": "const is evaluated at compile-time and hardcoded into calling assemblies; it can only be primitive types. readonly is evaluated at runtime, can be initialized at declaration or in a constructor, and can hold references to complex objects.",
      "personalNote": "Use static readonly over public const in shared libraries.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-9",
      "question": "What is the difference between ref and out parameters in C#?",
      "category": "C# & CLR",
      "difficulty": "Medium",
      "answer": "Both pass arguments by reference. With ref, the variable must be initialized before passing. With out, the variable does not need to be initialized beforehand, but the called method MUST assign a value before returning.",
      "personalNote": "C# 7 supports inline out declarations: int.TryParse(s, out int n).",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-10",
      "question": "What are C# Records and when should you prefer record over class?",
      "category": "C# & CLR",
      "difficulty": "Medium",
      "answer": "Records provide built-in value-based equality, non-destructive mutation with 'with', and positional syntax. Unlike normal classes where == compares memory addresses, records compare property values. Ideal for DTOs and API payloads.",
      "personalNote": "Records provide value-based equality out of the box.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-11",
      "question": "What is the difference between IEnumerable<T> and IQueryable<T>?",
      "category": "C# & CLR",
      "difficulty": "Medium",
      "answer": "IEnumerable<T> operates in-memory; filtering methods (Where, Select) execute in local RAM via compiled delegates. IQueryable<T> uses Expression Trees translated by EF Core into SQL executed on the database server.",
      "personalNote": "IEnumerable = local memory; IQueryable = database SQL query.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-12",
      "question": "What are generic constraints in C# and why are they useful?",
      "category": "C# & CLR",
      "difficulty": "Medium",
      "answer": "Generic constraints restrict allowed types using 'where T : class', 'where T : struct', 'where T : new()', or 'where T : BaseClass'. They allow the compiler to permit calling methods and properties on T safely.",
      "personalNote": "Crucial for generic repositories: class Repository<T> where T : BaseEntity.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-13",
      "question": "What are the four core pillars of Object-Oriented Programming?",
      "category": "OOP & SOLID",
      "difficulty": "Easy",
      "answer": "1. Encapsulation: Bundling data and methods while restricting direct access. 2. Abstraction: Hiding implementation details behind clean interfaces. 3. Inheritance: Reusing base class capabilities (is-a). 4. Polymorphism: Treating derived types through a shared base interface.",
      "personalNote": "Be ready with clean real-world examples for each pillar.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-14",
      "question": "What is the difference between Method Overriding and Method Overloading?",
      "category": "OOP & SOLID",
      "difficulty": "Medium",
      "answer": "Overloading occurs within the same class (same method name, different parameter signatures) resolved at compile-time. Overriding occurs across a class hierarchy (using virtual/override) resolved dynamically at runtime.",
      "personalNote": "Overloading = compile-time; Overriding = runtime.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-15",
      "question": "Explain the Single Responsibility Principle (SRP) with an example.",
      "category": "OOP & SOLID",
      "difficulty": "Medium",
      "answer": "A class should have only one reason to change. If a UserService registers users, formats HTML emails, and runs SQL queries, it has 3 reasons to change. Extract IEmailService and IUserRepository so each class has one clear responsibility.",
      "personalNote": "One reason to change, not one method per class.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-16",
      "question": "Explain the Open/Closed Principle (OCP) and how interfaces enable it.",
      "category": "OOP & SOLID",
      "difficulty": "Medium",
      "answer": "Software entities should be open for extension but closed for modification. Instead of using switch statements to handle payment types, accept an IPaymentProcessor interface and add new payment classes without editing existing code.",
      "personalNote": "Switch statements on type codes often indicate an OCP violation.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-17",
      "question": "What is the Liskov Substitution Principle (LSP)?",
      "category": "OOP & SOLID",
      "difficulty": "Medium",
      "answer": "Subclasses must be substitutable for their base class without altering application correctness. The classic violation is Square inheriting from Rectangle and overriding dimensions so setting Width alters Height, breaking code expecting a Rectangle.",
      "personalNote": "Behavioral compatibility is what matters in LSP.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-18",
      "question": "What is the Interface Segregation Principle (ISP)?",
      "category": "OOP & SOLID",
      "difficulty": "Medium",
      "answer": "Clients should not be forced to depend upon interfaces they do not use. Instead of one fat interface (IWorker with Work, Eat, Sleep), break it into smaller role interfaces (IWorkable, IFeedable) so classes only implement what they need.",
      "personalNote": "Fat interfaces create empty NotImplementedException stubs.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-19",
      "question": "What is the Dependency Inversion Principle (DIP)?",
      "category": "OOP & SOLID",
      "difficulty": "Medium",
      "answer": "High-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details. Inversion of Control (IoC) containers achieve this by injecting interface dependencies at runtime.",
      "personalNote": "Depend upon abstractions, not concrete classes.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-20",
      "question": "Why should software engineers favor Composition over Inheritance?",
      "category": "OOP & SOLID",
      "difficulty": "Medium",
      "answer": "Inheritance creates tight compile-time coupling (fragile base class problem). Modifying a base class can silently break child classes. Composition ('has-a') combines smaller focused objects, providing runtime flexibility and simpler unit test mocking.",
      "personalNote": "Composition is runtime flexible; inheritance is compile-time rigid.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-21",
      "question": "What are C# Access Modifiers and what does 'internal' mean?",
      "category": "OOP & SOLID",
      "difficulty": "Easy",
      "answer": "public (any assembly), private (declaring class only), protected (class and derived classes), internal (same compiled assembly only), protected internal (same assembly or derived), private protected (derived within same assembly only).",
      "personalNote": "internal hides implementation details inside a single .dll.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-22",
      "question": "What is the difference between 'new' and 'override' when declaring a method in a derived class?",
      "category": "OOP & SOLID",
      "difficulty": "Medium",
      "answer": "'override' replaces the base virtual method dynamically at runtime. 'new' hides the base method (shadowing); when called through a base reference, the base method runs. Hiding is usually an accidental design mistake.",
      "personalNote": "Always use override for true polymorphic behavior.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-23",
      "question": "What is the purpose of the 'sealed' keyword in C#?",
      "category": "OOP & SOLID",
      "difficulty": "Medium",
      "answer": "Applying sealed to a class prevents other classes from inheriting from it. Applying it to an overridden method prevents further overriding. It guarantees class invariants and allows JIT compiler devirtualization optimizations.",
      "personalNote": "string is a sealed class in .NET.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-24",
      "question": "What is the difference between Creational, Structural, and Behavioral design patterns?",
      "category": "OOP & SOLID",
      "difficulty": "Hard",
      "answer": "Creational deals with object creation (Singleton, Factory, Builder). Structural deals with composition of classes and interfaces (Adapter, Decorator, Facade). Behavioral deals with algorithms and responsibilities (Strategy, Observer, Repository).",
      "personalNote": "DI = Creational/Structural; Middleware = Chain of Responsibility.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-25",
      "question": "What happens behind the scenes when a method is marked async and awaits a Task?",
      "category": "Async & Concurrency",
      "difficulty": "Medium",
      "answer": "The compiler transforms the method into an IAsyncStateMachine state machine. When an awaited task is incomplete, the method yields control, returning the thread to the thread pool. Upon I/O completion, a continuation resumes the state machine.",
      "personalNote": "Async does not create extra threads for I/O; it frees threads.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-26",
      "question": "Why is calling .Result or .Wait() dangerous in ASP.NET Core?",
      "category": "Async & Concurrency",
      "difficulty": "Hard",
      "answer": "Sync-over-async blocks thread pool threads while waiting for I/O, causing thread pool starvation. In environments with a SynchronizationContext, it causes catastrophic deadlocks because the continuation cannot enter the blocked thread.",
      "personalNote": "Never use .Result or .Wait(); always use await.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-27",
      "question": "Why is 'async void' considered bad practice, and when is it acceptable?",
      "category": "Async & Concurrency",
      "difficulty": "Medium",
      "answer": "async void methods cannot be awaited, and unhandled exceptions crash the entire process directly without being catchable. The only acceptable use is in UI event handlers whose signatures require void. In APIs, always return Task.",
      "personalNote": "Rule: async void only for UI event handlers.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-28",
      "question": "What is the purpose of CancellationToken in ASP.NET Core?",
      "category": "Async & Concurrency",
      "difficulty": "Medium",
      "answer": "CancellationToken enables cooperative cancellation. If a client aborts an HTTP request, passing HttpContext.RequestAborted into EF Core queries terminates the SQL query immediately, saving database CPU and memory.",
      "personalNote": "Always pass CancellationToken down to EF Core queries.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-29",
      "question": "What is the difference between Task.WhenAll and Task.WhenAny?",
      "category": "Async & Concurrency",
      "difficulty": "Medium",
      "answer": "Task.WhenAll executes multiple tasks concurrently and completes when ALL tasks complete, aggregating any exceptions. Task.WhenAny completes as soon as ANY single task finishes, useful for timeouts and racing redundant endpoints.",
      "personalNote": "Use Task.WhenAll to fetch independent datasets in parallel.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-30",
      "question": "What is the difference between CPU-bound and I/O-bound operations?",
      "category": "Async & Concurrency",
      "difficulty": "Hard",
      "answer": "I/O-bound operations wait for external systems (database, file, network) and should be awaited naturally without extra threads. CPU-bound operations require heavy processor calculation and should be offloaded using Task.Run().",
      "personalNote": "Do not wrap I/O calls in Task.Run().",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-31",
      "question": "What is ConfigureAwait(false) and is it needed in ASP.NET Core?",
      "category": "Async & Concurrency",
      "difficulty": "Hard",
      "answer": "ConfigureAwait(false) indicates that the continuation does not need to resume on the captured SynchronizationContext. Because ASP.NET Core has no SynchronizationContext, it is not required in controllers, though still recommended in class libraries.",
      "personalNote": "ASP.NET Core eliminated SynchronizationContext.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-32",
      "question": "What is ValueTask<T> and when should you use it instead of Task<T>?",
      "category": "Async & Concurrency",
      "difficulty": "Medium",
      "answer": "ValueTask<T> is a struct that avoids heap allocation when an asynchronous method frequently completes synchronously (e.g. returning cached results). Returning Task<T> allocates an object on the heap every time.",
      "personalNote": "ValueTask should only be awaited once.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-33",
      "question": "What is a Race Condition and how can you synchronize access in C#?",
      "category": "Async & Concurrency",
      "difficulty": "Hard",
      "answer": "A race condition occurs when concurrent threads access and modify shared state without synchronization. Prevent it using lock (Monitor) for synchronous code, SemaphoreSlim for async code, Interlocked for atomic math, or ConcurrentDictionary.",
      "personalNote": "Never use lock around an await; use SemaphoreSlim.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-34",
      "question": "Why can you not use the 'lock' statement with await in C#?",
      "category": "Async & Concurrency",
      "difficulty": "Hard",
      "answer": "lock requires thread affinity (the thread acquiring the lock must release it). In async code, the thread resuming after await is often a different thread pool thread. Use SemaphoreSlim.WaitAsync() and SemaphoreSlim.Release() instead.",
      "personalNote": "SemaphoreSlim is async-compatible.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-35",
      "question": "What is the difference between Primary Key and Foreign Key?",
      "category": "SQL Server & DB",
      "difficulty": "Easy",
      "answer": "A Primary Key uniquely identifies each record in a table, cannot contain NULLs, and creates a clustered index by default. A Foreign Key references the Primary Key of another table, enforcing referential integrity and preventing orphaned records.",
      "personalNote": "Primary Key = identity; Foreign Key = relationship integrity.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-36",
      "question": "What is the difference between a Clustered Index and a Non-Clustered Index?",
      "category": "SQL Server & DB",
      "difficulty": "Medium",
      "answer": "A Clustered Index dictates the physical storage order of rows on disk; a table can only have ONE. A Non-Clustered Index is a separate B-tree structure holding pointers to the physical rows; a table can have multiple non-clustered indexes.",
      "personalNote": "Clustered = dictionary sorted alphabetically; Non-clustered = book index.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-37",
      "question": "Explain the differences between INNER, LEFT, RIGHT, and FULL JOIN.",
      "category": "SQL Server & DB",
      "difficulty": "Medium",
      "answer": "INNER: returns rows with matches in both tables. LEFT: returns all rows from left table plus matching right rows (NULL if missing). RIGHT: returns all right rows plus matching left. FULL: returns all rows from both tables, filling with NULL.",
      "personalNote": "INNER is intersection; LEFT is all left + intersection.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-38",
      "question": "What is the difference between WHERE and HAVING in SQL?",
      "category": "SQL Server & DB",
      "difficulty": "Easy",
      "answer": "WHERE filters individual rows before grouping or aggregation occurs. HAVING filters aggregated groups after GROUP BY evaluation and can contain aggregate functions (HAVING COUNT(*) > 5).",
      "personalNote": "WHERE filters rows; HAVING filters groups.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-39",
      "question": "What are the ACID properties in database transactions?",
      "category": "SQL Server & DB",
      "difficulty": "Hard",
      "answer": "Atomicity (all operations succeed or all roll back), Consistency (database transitions between valid constraint states), Isolation (concurrent transactions do not interfere), Durability (committed changes persist through crashes).",
      "personalNote": "Bank transfer: debit Account A, credit Account B must be atomic.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-40",
      "question": "What are SQL Server Transaction Isolation Levels?",
      "category": "SQL Server & DB",
      "difficulty": "Hard",
      "answer": "Read Uncommitted (allows dirty reads), Read Committed (default; prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms via range locks), Snapshot (uses row versioning in tempdb).",
      "personalNote": "Read Committed is default in SQL Server.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-41",
      "question": "What is the difference between Index Seek and Index Scan?",
      "category": "SQL Server & DB",
      "difficulty": "Medium",
      "answer": "Index Seek traverses the B-tree directly to target rows in O(log N) time (very fast). Index Scan reads every single page of the index sequentially from start to finish O(N) because no suitable filter or covering index exists.",
      "personalNote": "Seek = direct phone number lookup; Scan = reading whole book.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-42",
      "question": "What is a Composite Index and why does column order matter?",
      "category": "SQL Server & DB",
      "difficulty": "Medium",
      "answer": "An index on two or more columns (e.g. CustomerId, OrderDate). Column order matters due to the Leftmost Prefix rule: SQL can use it for queries filtering by CustomerId or both, but NOT for queries filtering ONLY by OrderDate.",
      "personalNote": "Put the most selective column first in composite indexes.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-43",
      "question": "What is the difference between DELETE, TRUNCATE, and DROP?",
      "category": "SQL Server & DB",
      "difficulty": "Easy",
      "answer": "DELETE is a DML command deleting specific rows, logged individually, fires triggers, preserves identity. TRUNCATE is DDL removing all rows via page deallocation, resets identity, faster, no triggers. DROP removes data AND schema.",
      "personalNote": "TRUNCATE resets identity; DROP destroys table schema.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-44",
      "question": "What is a Stored Procedure and why is it useful?",
      "category": "SQL Server & DB",
      "difficulty": "Medium",
      "answer": "A precompiled collection of T-SQL statements stored in the database. Benefits: cached execution plans, security encapsulation without direct table access, network traffic reduction, and immunity to SQL injection when parameterized.",
      "personalNote": "Stored procedures cache execution plans in SQL Server.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-45",
      "question": "What is the difference between UNION and UNION ALL?",
      "category": "SQL Server & DB",
      "difficulty": "Medium",
      "answer": "UNION combines results and performs an implicit sort to eliminate duplicate rows. UNION ALL combines results including duplicates without sorting, making it significantly faster.",
      "personalNote": "Always prefer UNION ALL unless duplicate removal is required.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-46",
      "question": "What is a Deadlock in SQL Server and how does the engine resolve it?",
      "category": "SQL Server & DB",
      "difficulty": "Hard",
      "answer": "A deadlock occurs when two transactions hold locks on different resources and each requests a lock on the other's resource. SQL Server's Deadlock Monitor detects cyclical waits, chooses the transaction with lowest rollback cost as victim, and aborts it.",
      "personalNote": "Access tables in consistent alphabetical order to prevent deadlocks.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-47",
      "question": "What is Database Normalization and why is it necessary?",
      "category": "Database Design",
      "difficulty": "Medium",
      "answer": "A systematic design process to eliminate data redundancy and prevent insertion, update, and deletion anomalies. It ensures data modifications occur in a single location, preserving data integrity.",
      "personalNote": "Redundancy causes update and deletion anomalies.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-48",
      "question": "Explain 1NF, 2NF, and 3NF.",
      "category": "Database Design",
      "difficulty": "Medium",
      "answer": "1NF: Atomic column values, unique row identifier, no repeating groups. 2NF: In 1NF and no partial key dependencies. 3NF: In 2NF and no transitive dependencies (non-key attributes depend only on the primary key).",
      "personalNote": "Mnemonic: The key (1NF), the whole key (2NF), nothing but the key (3NF).",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-49",
      "question": "How do you model a Many-to-Many relationship in relational databases?",
      "category": "Database Design",
      "difficulty": "Medium",
      "answer": "By introducing a Junction (bridge) table containing two foreign keys referencing both parent tables. The junction table typically uses a composite primary key of both foreign keys and can hold relationship metadata (e.g. EnrollmentDate).",
      "personalNote": "StudentCourses junction table connects Students and Courses.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-50",
      "question": "What is the difference between a Surrogate Key and a Natural Key?",
      "category": "Database Design",
      "difficulty": "Medium",
      "answer": "A Natural Key is a real-world business attribute (Email, SSN, ISBN). A Surrogate Key is a system-generated artificial identifier (auto-increment INT or GUID) with no business meaning. Surrogate keys are preferred because business rules change.",
      "personalNote": "Surrogate keys never change, making foreign keys stable.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-51",
      "question": "What are Cascade Delete behaviors and why can CASCADE DELETE be risky?",
      "category": "Database Design",
      "difficulty": "Medium",
      "answer": "Cascade actions determine child row behavior on parent deletion: CASCADE, RESTRICT/NO ACTION, SET NULL. CASCADE DELETE can accidentally purge thousands of historical auditing records (e.g. deleting a Customer deletes all Invoices).",
      "personalNote": "Use RESTRICT or Soft Delete for financial auditing compliance.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-52",
      "question": "What is Denormalization and when should you consider it?",
      "category": "Database Design",
      "difficulty": "Medium",
      "answer": "Denormalization deliberately introduces redundancy into a normalized schema to improve read performance by reducing complex JOINs. It is common in data warehousing and read-heavy reporting systems.",
      "personalNote": "Normalize for transactional integrity; denormalize for read-heavy reporting.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-53",
      "question": "What is a Soft Delete and how is it implemented?",
      "category": "Database Design",
      "difficulty": "Medium",
      "answer": "Soft Delete marks records with an IsDeleted bit column instead of executing a physical SQL DELETE. In EF Core, Global Query Filters (HasQueryFilter(e => !e.IsDeleted)) automate filtering across all application queries.",
      "personalNote": "EF Core Global Query Filters make soft deletes automatic.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-54",
      "question": "What is the difference between char, varchar, and nvarchar?",
      "category": "Database Design",
      "difficulty": "Easy",
      "answer": "char: fixed-length non-Unicode (padded with spaces). varchar: variable-length non-Unicode (1 byte/char). nvarchar: variable-length Unicode (2 bytes/char), supporting Arabic, Chinese, and emojis.",
      "personalNote": "Always use nvarchar for multilingual and Arabic text.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-55",
      "question": "What is Deferred Execution in LINQ?",
      "category": "LINQ",
      "difficulty": "Medium",
      "answer": "A LINQ query executes only when iterated over (via foreach, ToList, FirstOrDefault), not when declared. This allows composing dynamic queries before generating a single SQL statement.",
      "personalNote": "ToList() forces immediate execution.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-56",
      "question": "What is the difference between First, FirstOrDefault, Single, and SingleOrDefault?",
      "category": "LINQ",
      "difficulty": "Easy",
      "answer": "First: throws if empty. FirstOrDefault: returns default if empty. Single: throws if empty OR > 1 item. SingleOrDefault: returns default if empty; throws if > 1 item.",
      "personalNote": "Use SingleOrDefault to assert that only one record matches unique key.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-57",
      "question": "Why should you prefer Any() over Count() > 0 in LINQ?",
      "category": "LINQ",
      "difficulty": "Medium",
      "answer": "Any() short-circuits on finding the first matching element (translating to IF EXISTS in SQL Server). Count() > 0 scans the whole collection or runs full COUNT(*) in SQL.",
      "personalNote": "Any() produces optimized SELECT 1 ... WHERE EXISTS.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-58",
      "question": "What does the SelectMany operator do in LINQ?",
      "category": "LINQ",
      "difficulty": "Medium",
      "answer": "SelectMany flattens nested one-to-many sequences into a single sequence (e.g. orders.SelectMany(o => o.Items) produces a flat list of all OrderItems).",
      "personalNote": "Select projects 1-to-1; SelectMany flattens 1-to-many.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-59",
      "question": "How do Expression Trees work in LINQ to Entities?",
      "category": "LINQ",
      "difficulty": "Hard",
      "answer": "When passed to IQueryable, lambdas become Expression<Func<T, bool>> trees rather than compiled code. EF Core inspects the expression tree at runtime and translates C# method calls into SQL text.",
      "personalNote": "Expression trees allow runtime SQL query translation.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-60",
      "question": "What is the difference between GroupBy in LINQ and GROUP BY in SQL?",
      "category": "LINQ",
      "difficulty": "Medium",
      "answer": "SQL GROUP BY collapses rows into scalar aggregates. LINQ GroupBy returns IGrouping<TKey, TElement> holding the key and the full collection of source elements.",
      "personalNote": "IGrouping keeps the underlying elements accessible.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-61",
      "question": "How do you perform a Left Outer Join in LINQ method syntax?",
      "category": "LINQ",
      "difficulty": "Medium",
      "answer": "Using GroupJoin() combined with SelectMany() and DefaultIfEmpty(). DefaultIfEmpty ensures outer elements with no matching inner elements produce a default null row.",
      "personalNote": "GroupJoin + SelectMany + DefaultIfEmpty = SQL LEFT JOIN.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-62",
      "question": "What is client-side evaluation in EF Core?",
      "category": "LINQ",
      "difficulty": "Medium",
      "answer": "When EF Core cannot translate a LINQ expression to SQL, client-side evaluation pulls table data into RAM to evaluate. Since EF Core 3.0, untranslatable queries throw exceptions to prevent hidden performance bugs.",
      "personalNote": "EF Core throws InvalidOperationException if query cannot be translated.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-63",
      "question": "What is the difference between Eager, Lazy, and Explicit loading in EF Core?",
      "category": "EF Core",
      "difficulty": "Medium",
      "answer": "Eager: loads relations in initial query via .Include() (SQL JOIN). Lazy: loads relations automatically when navigation property is first accessed (can trigger N+1). Explicit: loads on demand via Entry(e).Reference().LoadAsync().",
      "personalNote": "Eager loading with DTO projection is the API best practice.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-64",
      "question": "What is the N+1 query problem and how do you prevent it?",
      "category": "EF Core",
      "difficulty": "Medium",
      "answer": "Executing 1 query for parents, then N queries in a loop for children. Prevent it using .Include() eager loading or projecting directly to DTOs with .Select().",
      "personalNote": "DTO projection using .Select() completely prevents N+1 queries.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-65",
      "question": "Why is AsNoTracking() critical for read-only queries?",
      "category": "EF Core",
      "difficulty": "Medium",
      "answer": "By default, EF Core tracks entities in ChangeTracker to detect modifications. AsNoTracking() disables snapshots, drastically cutting memory and execution time for GET endpoints.",
      "personalNote": "Use AsNoTracking() on all read-only API actions.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-66",
      "question": "What is the DbContext lifecycle and why should it be Scoped?",
      "category": "EF Core",
      "difficulty": "Medium",
      "answer": "DbContext is a non-thread-safe Unit of Work. Registering it as Scoped guarantees one instance per HTTP request shared by services, disposed at request end. Singleton causes crashes; Transient breaks change tracking.",
      "personalNote": "DbContext must always be registered as Scoped in ASP.NET Core.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-67",
      "question": "What are EF Core Migrations and how do they work in production CI/CD?",
      "category": "EF Core",
      "difficulty": "Medium",
      "answer": "Migrations record C# model changes and track applied state in __EFMigrationsHistory. In production CI/CD, generate idempotent SQL scripts using 'dotnet ef migrations script' rather than running auto-migrations on app boot.",
      "personalNote": "Generate SQL migration scripts for production pipelines.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-68",
      "question": "What is the difference between Data Annotations and Fluent API in EF Core?",
      "category": "EF Core",
      "difficulty": "Medium",
      "answer": "Data Annotations use attributes on entity classes ([Required], [MaxLength]). Fluent API configures models programmatically in OnModelCreating via IEntityTypeConfiguration, keeping domain entities clean of persistence concerns.",
      "personalNote": "Fluent API supports advanced mappings like composite keys and converters.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-69",
      "question": "How does EF Core handle Optimistic Concurrency?",
      "category": "EF Core",
      "difficulty": "Hard",
      "answer": "By designating a property as a concurrency token (e.g. byte[] with [Timestamp] or IsRowVersion()). EF Core includes it in UPDATE WHERE clauses; if 0 rows are updated, it throws DbUpdateConcurrencyException.",
      "personalNote": "RowVersion byte[] column enables optimistic concurrency.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-70",
      "question": "What are Shadow Properties in EF Core?",
      "category": "EF Core",
      "difficulty": "Medium",
      "answer": "Properties defined in the EF Core model mapped to SQL columns that do not exist as C# properties in the domain class. Useful for auditing columns (CreatedAt, IsDeleted).",
      "personalNote": "Access via _context.Entry(entity).Property(\"CreatedAt\").CurrentValue.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-71",
      "question": "What are Value Converters in EF Core?",
      "category": "EF Core",
      "difficulty": "Medium",
      "answer": "Value Converters translate property values between C# types and database types, such as storing C# enums as text strings or encrypting sensitive values before writing to SQL.",
      "personalNote": "Example: HasConversion<string>() stores enums as strings.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-72",
      "question": "How do you execute raw SQL queries safely in EF Core without SQL Injection?",
      "category": "EF Core",
      "difficulty": "Medium",
      "answer": "Use FromSqlInterpolated($\"SELECT * FROM Users WHERE Id = {id}\"). EF Core automatically parameterizes the interpolated variables as DbParameters. Avoid FromSqlRaw with concatenated strings.",
      "personalNote": "FromSqlInterpolated parameterizes values automatically.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-73",
      "question": "What is the purpose of HasQueryFilter in EF Core?",
      "category": "EF Core",
      "difficulty": "Medium",
      "answer": "HasQueryFilter configures global query filters applied automatically to all LINQ queries for that entity type. Ideal for soft deletes (!IsDeleted) and multi-tenancy (TenantId). Bypass using .IgnoreQueryFilters().",
      "personalNote": "Essential for global soft deletes and multi-tenancy.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-74",
      "question": "What is Query Splitting in EF Core and when should you use AsSplitQuery()?",
      "category": "EF Core",
      "difficulty": "Hard",
      "answer": "Loading multiple child collections with .Include() generates cartesian product JOINs. AsSplitQuery() executes separate SQL queries for each collection and joins them in memory, avoiding explosive data duplication.",
      "personalNote": "Use AsSplitQuery() when including multiple child collections.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-75",
      "question": "Explain the ASP.NET Core request pipeline and middleware order.",
      "category": "ASP.NET Core",
      "difficulty": "Medium",
      "answer": "Middleware components handle requests and responses sequentially. Critical order: Exception Handler -> HTTPS -> Routing -> CORS -> Authentication -> Authorization -> Endpoints (MapControllers).",
      "personalNote": "UseAuthentication must precede UseAuthorization; UseCors must precede UseAuthorization.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-76",
      "question": "What is the difference between Transient, Scoped, and Singleton service lifetimes?",
      "category": "ASP.NET Core",
      "difficulty": "Medium",
      "answer": "Transient: created new every time requested. Scoped: created once per HTTP request and disposed at end. Singleton: created once on first request and lives for application process lifetime.",
      "personalNote": "Never inject a Scoped service into a Singleton service.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-77",
      "question": "What is a Captive Dependency in ASP.NET Core?",
      "category": "ASP.NET Core",
      "difficulty": "Hard",
      "answer": "A captive dependency occurs when a service with a longer lifetime depends on a service with a shorter lifetime (e.g. injecting Scoped DbContext into a Singleton cache). ASP.NET Core detects this in Development mode.",
      "personalNote": "Captive dependencies cause concurrency bugs and memory leaks.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-78",
      "question": "What is the IOptions<T> pattern in ASP.NET Core?",
      "category": "ASP.NET Core",
      "difficulty": "Medium",
      "answer": "Provides strongly typed access to settings. IOptions<T> (Singleton, reads once on boot), IOptionsSnapshot<T> (Scoped, reloads per HTTP request), IOptionsMonitor<T> (Singleton, real-time change notifications).",
      "personalNote": "Use IOptionsSnapshot to reload settings without restarting.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-79",
      "question": "How do you implement custom Middleware in ASP.NET Core?",
      "category": "ASP.NET Core",
      "difficulty": "Medium",
      "answer": "Create a class with a RequestDelegate next parameter in constructor and an 'async Task InvokeAsync(HttpContext context)' method. Call 'await next(context)' to pass execution to the next middleware component.",
      "personalNote": "Encapsulate registration in an app.UseCustomMiddleware() extension method.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-80",
      "question": "What is Kestrel in ASP.NET Core?",
      "category": "ASP.NET Core",
      "difficulty": "Medium",
      "answer": "Kestrel is the cross-platform, high-performance event-driven web server included with ASP.NET Core. In production, it can face the internet directly or sit behind reverse proxies (Nginx, IIS, Apache) for SSL and load balancing.",
      "personalNote": "Kestrel runs cross-platform on Linux, Windows, and macOS.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-81",
      "question": "What is the difference between appsettings.json, User Secrets, and Environment Variables?",
      "category": "ASP.NET Core",
      "difficulty": "Medium",
      "answer": "appsettings.json stores base config committed to git. User Secrets stores local development passwords outside the repo. Environment Variables override settings in production cloud containers without changing code.",
      "personalNote": "Hierarchy: Environment Variables override User Secrets, which override appsettings.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-82",
      "question": "Explain Clean Architecture layers and the Dependency Rule.",
      "category": "ASP.NET Core",
      "difficulty": "Hard",
      "answer": "Domain (center: entities, no dependencies) -> Application (services, DTOs, interfaces) -> Infrastructure (EF Core, email) -> Presentation (WebApi controllers). Dependency Rule: all dependencies point inward toward Domain.",
      "personalNote": "Domain has zero NuGet or database references.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-83",
      "question": "What is the Repository Pattern and why use it with EF Core?",
      "category": "ASP.NET Core",
      "difficulty": "Medium",
      "answer": "Although EF Core DbContext acts as a Unit of Work, custom repositories encapsulate complex querying logic, provide clean abstractions for xUnit/Moq mocking, and prevent leaking IQueryable to controllers.",
      "personalNote": "Do not create generic repositories that re-expose IQueryable.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-84",
      "question": "What is Content Negotiation in ASP.NET Core Web API?",
      "category": "ASP.NET Core",
      "difficulty": "Medium",
      "answer": "The process where client sends an Accept header (e.g. application/json) and server selects the matching OutputFormatter to serialize the response into the requested representation.",
      "personalNote": "JSON is the default formatter in ASP.NET Core.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-85",
      "question": "What does the [ApiController] attribute do in ASP.NET Core?",
      "category": "Web API & REST",
      "difficulty": "Easy",
      "answer": "Enables automatic 400 Bad Request responses on invalid ModelState, automatic parameter binding source inference ([FromBody], [FromRoute]), multipart inference, and Problem Details error formatting.",
      "personalNote": "Eliminates boilerplate ModelState validation checks.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-86",
      "question": "Why should you never return EF Core entities directly from Web API controllers?",
      "category": "Web API & REST",
      "difficulty": "Medium",
      "answer": "Over-posting vulnerabilities (clients modify internal properties), circular reference loops during JSON serialization, tight coupling between DB schema and public API, and accidental exposure of sensitive fields (passwords).",
      "personalNote": "Always return Request and Response DTOs.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-87",
      "question": "What is RFC 7807 Problem Details and why is it useful?",
      "category": "Web API & REST",
      "difficulty": "Medium",
      "answer": "A standardized JSON schema for HTTP API error responses containing type, title, status, detail, and instance fields so clients (Angular, mobile) can parse API errors predictably.",
      "personalNote": "Problem Details Content-Type is application/problem+json.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-88",
      "question": "What is a JSON Web Token (JWT) and what are its three components?",
      "category": "Security",
      "difficulty": "Medium",
      "answer": "A compact URL-safe standard (RFC 7519) consisting of Header.Payload.Signature. Header specifies algorithm; Payload contains user claims; Signature is generated with a server secret key to verify authenticity.",
      "personalNote": "Payload is Base64Url encoded, NOT encrypted. Never put passwords in claims.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-89",
      "question": "What is the difference between Authentication and Authorization?",
      "category": "Security",
      "difficulty": "Medium",
      "answer": "Authentication verifies WHO you are (confirming identity via credentials or token). Authorization verifies WHAT you are permitted to do (access control via roles, claims, or policies).",
      "personalNote": "Authentication = identity; Authorization = permissions.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-90",
      "question": "Why should passwords never be encrypted, and what is Hashing?",
      "category": "Security",
      "difficulty": "Medium",
      "answer": "Encryption is two-way (decryption key restores plaintext). If the key is stolen, all passwords leak. Hashing is a one-way mathematical function. Passwords must be hashed using salted, adaptive algorithms (BCrypt, Argon2).",
      "personalNote": "Passwords must be one-way hashed with salt, never encrypted.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-91",
      "question": "What is CORS and why do browsers enforce it?",
      "category": "Security",
      "difficulty": "Medium",
      "answer": "A browser security mechanism enforcing the Same-Origin Policy. Browsers block frontend scripts on Origin A from reading responses from Origin B unless server B sends Access-Control-Allow-Origin headers authorizing Origin A.",
      "personalNote": "CORS is enforced by the browser, not the server.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-92",
      "question": "What is SQL Injection and how do parameterized queries prevent it?",
      "category": "Security",
      "difficulty": "Medium",
      "answer": "SQL Injection concatenates untrusted input into raw SQL strings to manipulate query syntax. Parameterized queries treat input strictly as literal values, preventing input from altering the SQL execution tree.",
      "personalNote": "EF Core and LINQ automatically parameterize all inputs.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-93",
      "question": "What is Cross-Site Scripting (XSS) and how does modern frontend architecture prevent it?",
      "category": "Security",
      "difficulty": "Medium",
      "answer": "XSS injects malicious client-side JavaScript into web pages viewed by other users to steal session tokens. Frameworks like Angular prevent XSS by automatically treating all data-bound values as untrusted and contextually escaping them.",
      "personalNote": "Angular context-aware escaping neutralizes XSS by default.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-94",
      "question": "What is Cross-Site Request Forgery (CSRF) and why are stateless JWTs resistant?",
      "category": "Security",
      "difficulty": "Medium",
      "answer": "CSRF tricks an authenticated browser into submitting unwanted requests where the user has active session cookies. APIs using stateless JWTs via the Authorization: Bearer header are resistant because browsers do not attach custom headers automatically.",
      "personalNote": "Bearer tokens in Authorization headers are immune to CSRF.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-95",
      "question": "What are Standalone Components in modern Angular?",
      "category": "Angular & Frontend",
      "difficulty": "Medium",
      "answer": "Components with standalone: true that directly import their own dependencies (CommonModule, ReactiveFormsModule) without needing an NgModule. They reduce boilerplate and improve lazy loading.",
      "personalNote": "Standalone components are the modern Angular standard.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-96",
      "question": "What is an Angular HTTP Interceptor and what are common use cases?",
      "category": "Angular & Frontend",
      "difficulty": "Medium",
      "answer": "A service intercepting outgoing HTTP requests and incoming responses globally. Use cases: cloning requests to attach JWT Bearer tokens, catching 401/403 errors to redirect to login, and handling loading spinners.",
      "personalNote": "Modern Angular uses functional HttpInterceptorFn.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-97",
      "question": "What is the difference between Observable and Promise?",
      "category": "Angular & Frontend",
      "difficulty": "Medium",
      "answer": "Promises are eager (execute immediately), emit a single value, and cannot be cancelled. Observables (RxJS) are lazy (execute only when subscribed to), can emit streams of multiple values over time, and support cancellation and operators.",
      "personalNote": "Observables are lazy, cancellable streams; Promises are eager single values.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-98",
      "question": "Why are Reactive Forms preferred over Template-Driven forms in Angular?",
      "category": "Angular & Frontend",
      "difficulty": "Medium",
      "answer": "Reactive Forms manage state and validation programmatically in TypeScript via FormGroup and FormControl. They are immutable, synchronous, strictly typed, and easy to unit test without DOM rendering.",
      "personalNote": "Reactive Forms provide complete programmatic control in TypeScript.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-99",
      "question": "What is the Arrange-Act-Assert (AAA) pattern in unit testing?",
      "category": "Testing & DevOps",
      "difficulty": "Medium",
      "answer": "The standard pattern for structuring tests: Arrange sets up inputs and mock dependencies; Act executes the method under test; Assert verifies output values and expected side effects.",
      "personalNote": "Every unit test should visibly follow Arrange, Act, Assert.",
      "confidence": "Medium",
      "reviewStatus": "none"
    },
    {
      "id": "iq-100",
      "question": "What is the difference between Git Merge and Git Rebase?",
      "category": "Testing & DevOps",
      "difficulty": "Medium",
      "answer": "Git Merge combines branches by creating a merge commit preserving complete chronological branch history. Git Rebase moves commits onto the tip of the target branch creating a linear history. Never rebase shared public branches.",
      "personalNote": "Rebase creates a linear history; never rebase shared branches.",
      "confidence": "Medium",
      "reviewStatus": "none"
    }
  ],
  "jobReadinessChecklist": [
    {
      "category": "C# Fundamentals & OOP",
      "items": [
        {
          "id": "jr-1",
          "text": "Strong grasp of C# syntax, data types, and value vs reference memory mechanics",
          "completed": false
        },
        {
          "id": "jr-2",
          "text": "Model complex domains using classes, encapsulation, inheritance, and polymorphism",
          "completed": false
        },
        {
          "id": "jr-3",
          "text": "Master generic collections (List, Dictionary, HashSet) and know when to use each",
          "completed": false
        },
        {
          "id": "jr-4",
          "text": "Handle exceptions cleanly using try, catch, finally without swallowing errors",
          "completed": false
        },
        {
          "id": "jr-5",
          "text": "Write fluent LINQ queries with deferred execution and projection",
          "completed": false
        },
        {
          "id": "jr-6",
          "text": "Write non-blocking asynchronous code using async, await, Task, and CancellationTokens",
          "completed": false
        }
      ]
    },
    {
      "category": "Backend & ASP.NET Core Web API",
      "items": [
        {
          "id": "jr-7",
          "text": "Build RESTful API controllers with [ApiController], [Route], and HTTP method attributes",
          "completed": false
        },
        {
          "id": "jr-8",
          "text": "Implement Dependency Injection with proper Transient, Scoped, and Singleton lifetimes",
          "completed": false
        },
        {
          "id": "jr-9",
          "text": "Assemble the HTTP request pipeline and write custom middleware components",
          "completed": false
        },
        {
          "id": "jr-10",
          "text": "Design Request and Response DTOs and never expose EF Core entities directly",
          "completed": false
        },
        {
          "id": "jr-11",
          "text": "Implement input validation using FluentValidation and return ProblemDetails",
          "completed": false
        },
        {
          "id": "jr-12",
          "text": "Secure endpoints with JWT authentication, [Authorize], and role-based policies",
          "completed": false
        }
      ]
    },
    {
      "category": "Database & EF Core",
      "items": [
        {
          "id": "jr-13",
          "text": "Design normalized relational schemas (1NF-3NF) with keys and constraints",
          "completed": false
        },
        {
          "id": "jr-14",
          "text": "Write SQL queries with multiple table joins, aggregations, and subqueries",
          "completed": false
        },
        {
          "id": "jr-15",
          "text": "Understand Clustered vs Non-Clustered Indexes and inspection of execution plans",
          "completed": false
        },
        {
          "id": "jr-16",
          "text": "Configure EF Core DbContext, Fluent API mappings, and manage database migrations",
          "completed": false
        },
        {
          "id": "jr-17",
          "text": "Eliminate N+1 queries using eager loading (Include) and projection (.Select)",
          "completed": false
        }
      ]
    },
    {
      "category": "Frontend & Angular",
      "items": [
        {
          "id": "jr-18",
          "text": "Write semantic, accessible HTML5 and responsive mobile-first CSS (Flexbox & Grid)",
          "completed": false
        },
        {
          "id": "jr-19",
          "text": "Understand modern JavaScript (ES6+), Promises, async/await, and DOM events",
          "completed": false
        },
        {
          "id": "jr-20",
          "text": "Build modular Angular applications using standalone components and modern control flow",
          "completed": false
        },
        {
          "id": "jr-21",
          "text": "Implement Reactive Forms with validation for data entry screens",
          "completed": false
        },
        {
          "id": "jr-22",
          "text": "Connect Angular to .NET Web API using HttpClient and HttpInterceptors for JWT",
          "completed": false
        }
      ]
    },
    {
      "category": "Testing & DevOps",
      "items": [
        {
          "id": "jr-23",
          "text": "Write unit tests using xUnit, Arrange-Act-Assert, and mock dependencies with Moq",
          "completed": false
        },
        {
          "id": "jr-24",
          "text": "Use Git for version control: branching, pull requests, and resolving conflicts",
          "completed": false
        },
        {
          "id": "jr-25",
          "text": "Deploy full-stack applications to cloud hosting with live URLs and HTTPS",
          "completed": false
        }
      ]
    },
    {
      "category": "Portfolio & Job Preparation",
      "items": [
        {
          "id": "jr-26",
          "text": "Have at least 1 C# console project showcasing OOP and collections on GitHub",
          "completed": false
        },
        {
          "id": "jr-27",
          "text": "Have at least 1 deployed ASP.NET Core Web API with Swagger and SQL Server on GitHub",
          "completed": false
        },
        {
          "id": "jr-28",
          "text": "Have 1 complete Full Stack Angular + .NET Capstone project with live demo URL",
          "completed": false
        },
        {
          "id": "jr-29",
          "text": "Write professional GitHub README files with architecture diagrams and setup instructions",
          "completed": false
        },
        {
          "id": "jr-30",
          "text": "Explain architectural decisions and debug problems calmly during technical interviews",
          "completed": false
        }
      ]
    }
  ],
  "notes": [
    {
      "id": "note-1",
      "title": "Value vs Reference Types Memory Mental Model",
      "phaseId": "phase-1",
      "topicId": "p1-t1",
      "content": "Always remember: Stack is fast, contiguous, and cleans up automatically when method returns. Heap requires Garbage Collector passes. Passing a class creates a new reference pointing to same object on heap. Passing a struct copies all bytes.",
      "pinned": true,
      "updatedAt": "2026-09-11T14:30:00Z"
    },
    {
      "id": "note-2",
      "title": "Why AsNoTracking() is mandatory for read-only queries",
      "phaseId": "phase-7",
      "topicId": "p7-t5",
      "content": "When querying items to display on a webpage or return from an API, EF Core's ChangeTracker creates internal snapshot copies of every entity by default. Using .AsNoTracking() disables this snapshot, cutting query execution time and memory consumption in half.",
      "pinned": true,
      "updatedAt": "2026-09-12T10:15:00Z"
    }
  ],
  "resources": [
    {
      "id": "res-1",
      "title": "Microsoft Learn .NET Documentation",
      "url": "https://learn.microsoft.com/en-us/dotnet/",
      "type": "Documentation",
      "phaseId": "phase-1"
    },
    {
      "id": "res-2",
      "title": "EF Core Official Guides",
      "url": "https://learn.microsoft.com/en-us/ef/core/",
      "type": "Documentation",
      "phaseId": "phase-7"
    },
    {
      "id": "res-3",
      "title": "Angular Official Guides",
      "url": "https://angular.dev",
      "type": "Documentation",
      "phaseId": "phase-19"
    },
    {
      "id": "res-4",
      "title": "David Fowler's ASP.NET Core Async Guidance",
      "url": "https://github.com/davidfowl/AspNetCoreDiagnosticScenarios/blob/master/AsyncGuidance.md",
      "type": "Article",
      "phaseId": "phase-3"
    }
  ],
  "archive": {
    "phases": [],
    "topics": [],
    "projects": []
  }
};

if (typeof window !== "undefined") {
  window.initialRoadmapData = initialRoadmapData;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { initialRoadmapData };
}
