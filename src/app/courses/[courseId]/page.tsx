import { CourseDetails } from '@/components/course/course-details'

function getCourseDetails(courseId: string) {
  const courses = [
    // Personal Law Courses
    { 
      id: "marriage-laws",
      title: "Marriage Laws and Procedures in Bangladesh", 
      description: "Dive deep into the intricacies of marriage laws in Bangladesh. This comprehensive course covers everything from legal requirements for marriage registration to the rights and obligations of spouses under Bangladeshi law.",
      imageId: 1,
      price: 99.99,
      duration: "4 weeks",
      level: "Intermediate",
      certification: true,
      targetAudience: "Legal professionals, couples planning to marry, and anyone interested in family law in Bangladesh",
      modules: [
        { title: "Introduction to Marriage Laws", description: "Overview of marriage laws in Bangladesh", duration: "1 week" },
        { title: "Types of Marriages", description: "Different types of marriages recognized in Bangladesh", duration: "1 week" },
        { title: "Marriage Registration", description: "Legal requirements and procedures for marriage registration", duration: "1 week" },
        { title: "Rights and Obligations", description: "Legal rights and obligations of spouses", duration: "1 week" },
      ],
      instructor: {
        name: "Dr. Fatima Rahman",
        title: "Family Law Expert",
        bio: "Dr. Fatima Rahman is a renowned expert in family law with over 15 years of experience in legal practice and academia.",
        imageUrl: "/placeholder.svg?height=100&width=100&text=FR"
      },
      learningOutcomes: [
        "Understand the legal framework governing marriages in Bangladesh",
        "Learn about the rights and obligations of spouses under Bangladeshi law",
        "Navigate the process of marriage registration",
        "Identify and address common legal issues in marriages"
      ],
      interactiveElements: [
        "Weekly quizzes",
        "Case study analyses",
        "Virtual moot court sessions"
      ],
      materials: [
        "Comprehensive course textbook",
        "Digital copies of relevant laws and regulations",
        "Access to online legal databases"
      ],
      faqs: [
        { question: "Is this course recognized by the Bangladesh Bar Council?", answer: "Yes, this course is recognized and accredited by the Bangladesh Bar Council for continuing legal education credits." },
        { question: "Can I access the course materials after completing the course?", answer: "Yes, you will have lifetime access to all course materials after completion." }
      ],
      relatedCourses: [
        { title: "Divorce Laws: Rights and Processes", href: "/courses/divorce-laws" },
        { title: "Child Custody and Guardianship", href: "/courses/child-custody" }
      ]
    },
    { 
      id: "divorce-laws",
      title: "Divorce Laws: Rights and Processes", 
      description: "Understand the legal landscape of divorce in Bangladesh with this in-depth course. You'll learn about the grounds for divorce under different personal laws, the step-by-step process of filing for divorce, and how to protect your rights during divorce proceedings.",
      imageId: 2,
      price: 89.99,
      duration: "4 weeks",
      level: "Intermediate",
      certification: true,
      targetAudience: "Legal professionals, individuals considering divorce, and those interested in family law",
      modules: [
        { title: "Grounds for Divorce", description: "Legal reasons for seeking divorce in Bangladesh", duration: "1 week" },
        { title: "Divorce Procedures", description: "Step-by-step process of filing for divorce", duration: "1 week" },
        { title: "Property Division", description: "Laws governing property division during divorce", duration: "1 week" },
        { title: "Child Custody in Divorce", description: "Understanding child custody laws in divorce cases", duration: "1 week" },
      ],
      instructor: {
        name: "Adv. Rashid Ahmed",
        title: "Divorce Law Specialist",
        bio: "Adv. Rashid Ahmed has been practicing family law for over 20 years, specializing in complex divorce cases.",
        imageUrl: "/placeholder.svg?height=100&width=100&text=RA"
      },
      learningOutcomes: [
        "Understand the grounds for divorce under different personal laws in Bangladesh",
        "Learn the step-by-step process of filing for divorce",
        "Understand how property is divided during divorce proceedings",
        "Learn about child custody laws in the context of divorce"
      ],
      interactiveElements: [
        "Mock divorce proceedings",
        "Document drafting exercises",
        "Q&A sessions with experienced divorce lawyers"
      ],
      materials: [
        "Comprehensive guide to divorce laws in Bangladesh",
        "Templates for divorce-related legal documents",
        "Case studies of landmark divorce cases"
      ],
      faqs: [
        { question: "How long does the divorce process typically take in Bangladesh?", answer: "The duration can vary, but typically it takes 6-12 months, depending on the complexity of the case and whether it's contested or uncontested." },
        { question: "Can this course help me represent myself in a divorce case?", answer: "While the course provides valuable information, we always recommend seeking professional legal representation for actual divorce proceedings." }
      ],
      relatedCourses: [
        { title: "Marriage Laws and Procedures in Bangladesh", href: "/courses/marriage-laws" },
        { title: "Child Custody and Guardianship", href: "/courses/child-custody" }
      ]
    },
    // ... other personal law courses ...

    // Business Law Courses
    {
      id: "contract-law",
      title: "Contract Law and Negotiation",
      description: "Master the art of drafting and negotiating contracts in the Bangladeshi business context. This course covers contract formation, terms, breach, and remedies.",
      imageId: 6,
      price: 109.99,
      duration: "6 weeks",
      level: "Intermediate",
      certification: true,
      targetAudience: "Legal professionals, business owners, and corporate executives",
      modules: [
        { title: "Fundamentals of Contract Law", description: "Basic principles and elements of contract law in Bangladesh", duration: "1 week" },
        { title: "Contract Formation", description: "Offer, acceptance, and consideration in contract formation", duration: "1 week" },
        { title: "Contract Terms and Interpretation", description: "Understanding and drafting contract terms", duration: "1 week" },
        { title: "Breach of Contract", description: "Types of breach and available remedies", duration: "1 week" },
        { title: "Contract Negotiation Strategies", description: "Effective techniques for negotiating contracts", duration: "1 week" },
        { title: "Special Types of Contracts", description: "Overview of specific contract types in business contexts", duration: "1 week" },
      ],
      instructor: {
        name: "Prof. Anisur Rahman",
        title: "Contract Law Expert",
        bio: "Prof. Anisur Rahman has over 25 years of experience in contract law and has advised numerous corporations on complex contractual matters.",
        imageUrl: "/placeholder.svg?height=100&width=100&text=AR"
      },
      learningOutcomes: [
        "Understand the key elements of a valid contract under Bangladeshi law",
        "Learn techniques for drafting clear and enforceable contracts",
        "Understand how to interpret contract terms and resolve ambiguities",
        "Develop effective contract negotiation skills",
        "Learn how to handle breaches of contract and seek appropriate remedies"
      ],
      interactiveElements: [
        "Contract drafting workshops",
        "Mock negotiation sessions",
        "Case studies on contract disputes"
      ],
      materials: [
        "Comprehensive textbook on contract law in Bangladesh",
        "Templates for various types of business contracts",
        "Access to online legal databases for contract research"
      ],
      faqs: [
        { question: "Is this course suitable for non-lawyers?", answer: "Yes, while the course is beneficial for legal professionals, it's designed to be accessible and valuable for business owners and executives as well." },
        { question: "Will this course cover international contract law?", answer: "The primary focus is on Bangladeshi contract law, but we do touch upon international aspects relevant to cross-border business transactions." }
      ],
      relatedCourses: [
        { title: "Company Law and Corporate Governance", href: "/courses/company-law" },
        { title: "Intellectual Property Rights", href: "/courses/intellectual-property" }
      ]
    },
    {
      id: "company-law",
      title: "Company Law and Corporate Governance",
      description: "Understand the legal framework governing companies in Bangladesh. Learn about company formation, shareholder rights, and corporate governance best practices.",
      imageId: 7,
      price: 99.99,
      duration: "5 weeks",
      level: "Intermediate",
      certification: true,
      targetAudience: "Legal professionals, business owners, corporate executives, and aspiring entrepreneurs",
      modules: [
        { title: "Introduction to Company Law", description: "Overview of company law in Bangladesh", duration: "1 week" },
        { title: "Company Formation and Types", description: "Process of forming different types of companies", duration: "1 week" },
        { title: "Corporate Governance", description: "Principles and best practices of corporate governance", duration: "1 week" },
        { title: "Shareholder Rights and Responsibilities", description: "Understanding the legal aspects of share ownership", duration: "1 week" },
        { title: "Corporate Compliance and Reporting", description: "Legal requirements for company compliance and reporting", duration: "1 week" },
      ],
      instructor: {
        name: "Dr. Sabina Yeasmin",
        title: "Corporate Law Specialist",
        bio: "Dr. Sabina Yeasmin is a leading expert in corporate law with over 20 years of experience in both academia and corporate advisory roles.",
        imageUrl: "/placeholder.svg?height=100&width=100&text=SY"
      },
      learningOutcomes: [
        "Understand the legal framework governing companies in Bangladesh",
        "Learn about different types of companies and their formation processes",
        "Gain knowledge of corporate governance principles and best practices",
        "Understand shareholder rights and responsibilities",
        "Learn about corporate compliance and reporting requirements"
      ],
      interactiveElements: [
        "Case studies on corporate governance issues",
        "Simulations of company formation processes",
        "Group discussions on shareholder rights scenarios"
      ],
      materials: [
        "Comprehensive textbook on company law in Bangladesh",
        "Templates for company formation documents",
        "Access to online resources on corporate governance"
      ],
      faqs: [
        { question: "Is this course relevant for small business owners?", answer: "Yes, while the course covers aspects relevant to larger corporations, it also provides valuable insights for small business owners, especially those planning to grow their businesses." },
        { question: "Does this course cover recent changes in company law?", answer: "Yes, the course content is regularly updated to reflect the latest changes in Bangladeshi company law and corporate governance standards." }
      ],
      relatedCourses: [
        { title: "Contract Law and Negotiation", href: "/courses/contract-law" },
        { title: "Taxation Law for Businesses", href: "/courses/tax-law" }
      ]
    },
    // ... other business law courses ...

    // Criminal Law Courses
    {
      id: "criminal-procedure",
      title: "Criminal Procedure in Bangladesh",
      description: "Gain a comprehensive understanding of criminal procedure in Bangladesh. This course covers arrest, bail, trial processes, and appeals in the criminal justice system.",
      imageId: 8,
      price: 99.99,
      duration: "6 weeks",
      level: "Intermediate",
      certification: true,
      targetAudience: "Law students, legal professionals, police officers, and individuals interested in criminal justice",
      modules: [
        { title: "Introduction to Criminal Procedure", description: "Overview of the criminal justice system in Bangladesh", duration: "1 week" },
        { title: "Arrest and Detention", description: "Legal procedures for arrest and rights of the accused", duration: "1 week" },
        { title: "Bail Process", description: "Understanding bail applications and procedures", duration: "1 week" },
        { title: "Trial Procedures", description: "Step-by-step guide to criminal trials in Bangladesh", duration: "1 week" },
        { title: "Evidence in Criminal Cases", description: "Rules of evidence in criminal proceedings", duration: "1 week" },
        { title: "Appeals and Revisions", description: "Procedures for appealing criminal convictions", duration: "1 week" },
      ],
      instructor: {
        name: "Justice Mahmud Hassan",
        title: "Former Supreme Court Judge",
        bio: "Justice Mahmud Hassan served on the Supreme Court of Bangladesh for 15 years and is an authority on criminal procedure.",
        imageUrl: "/placeholder.svg?height=100&width=100&text=MH"
      },
      learningOutcomes: [
        "Understand the structure of the criminal justice system in Bangladesh",
        "Learn about the legal procedures for arrest and the rights of the accused",
        "Gain knowledge about bail applications and procedures",
        "Understand the step-by-step process of criminal trials",
        "Learn about the rules of evidence in criminal proceedings",
        "Understand the procedures for appealing criminal convictions"
      ],
      interactiveElements: [
        "Mock trial simulations",
        "Case study analyses of landmark criminal cases",
        "Drafting exercises for legal documents used in criminal proceedings"
      ],
      materials: [
        "Comprehensive textbook on Criminal Procedure in Bangladesh",
        "Digital copies of relevant laws and regulations",
        "Access to online legal databases for case law research"
      ],
      faqs: [
        { question: "Is this course suitable for non-lawyers?", answer: "While designed primarily for legal professionals and law students, the course is structured to be accessible to anyone with a strong interest in criminal procedure, including police officers and justice system workers." },
        { question: "Will this course prepare me to represent clients in criminal cases?", answer: "This course provides a strong foundation in criminal procedure. However, to practice law, you would need to complete a law degree and meet other professional requirements." }
      ],
      relatedCourses: [
        { title: "Bangladesh Penal Code: In-depth Analysis", href: "/courses/penal-code" },
        { title: "Law of Evidence in Criminal Cases", href: "/courses/evidence-law" }
      ]
    },
    {
      id: "penal-code",
      title: "Bangladesh Penal Code: In-depth Analysis",
      description: "Explore the Bangladesh Penal Code in detail. This course covers major offenses, defenses, and recent amendments to the code.",
      imageId: 9,
      price: 89.99,
      duration: "8 weeks",
      level: "Advanced",
      certification: true,
      targetAudience: "Law students, legal professionals, and individuals seeking in-depth knowledge of criminal law in Bangladesh",
      modules: [
        { title: "Introduction to the Penal Code", description: "History and structure of the Bangladesh Penal Code", duration: "1 week" },
        { title: "General Exceptions", description: "Understanding defenses and exceptions in criminal law", duration: "1 week" },
        { title: "Offenses Against the State", description: "Analysis of crimes against the state and public tranquility", duration: "1 week" },
        { title: "Offenses Against the Human Body", description: "Detailed study of violent crimes and offenses against the person", duration: "1 week" },
        { title: "Property Offenses", description: "Analysis of theft, robbery, and other property crimes", duration: "1 week" },
        { title: "Offenses Against Public Justice", description: "Study of perjury, false evidence, and related crimes", duration: "1 week" },
        { title: "Sexual Offenses", description: "In-depth analysis of rape, sexual assault, and related crimes", duration: "1 week" },
        { title: "Recent Amendments", description: "Overview of recent changes to the Penal Code", duration: "1 week" },
      ],
      instructor: {
        name: "Prof. Rahim Uddin",
        title: "Criminal Law Expert",
        bio: "Prof. Rahim Uddin has over 30 years of experience teaching criminal law and has authored several books on the Bangladesh Penal Code.",
        imageUrl: "/placeholder.svg?height=100&width=100&text=RU"
      },
      learningOutcomes: [
        "Gain a comprehensive understanding of the Bangladesh Penal Code",
        "Learn about major criminal offenses and their elements",
        "Understand legal defenses and exceptions in criminal law",
        "Analyze recent amendments and their impact on criminal justice",
        "Develop skills in interpreting and applying penal code provisions"
      ],
      interactiveElements: [
        "Case study analyses of landmark criminal cases",
        "Moot court simulations on complex criminal law scenarios",
        "Quizzes on penal code provisions and their applications"
      ],
      materials: [
        "Comprehensive textbook on the Bangladesh Penal Code",
        "Digital copies of recent amendments and related legislation",
        "Access to online legal databases for case law research"
      ],
      faqs: [
        { question: "Is this course suitable for beginners in law?", answer: "While the course is designed for those with some background in law, motivated beginners can also benefit from it. However, we recommend having a basic understanding of legal concepts before enrolling." },
        { question: "Does this course cover comparative criminal law?", answer: "The primary focus is on the Bangladesh Penal Code, but we do include some comparative analysis with other jurisdictions where relevant." }
      ],
      relatedCourses: [
        { title: "Criminal Procedure in Bangladesh", href: "/courses/criminal-procedure" },
        { title: "Cybercrime and Digital Forensics", href: "/courses/cybercrime" }
      ]
    },
    // ... other criminal law courses ...

    // Civil Law Courses
    {
      id: "property-law",
      title: "Property Law and Land Rights",
      description: "Understand the complexities of property law in Bangladesh. This course covers land registration, transfer of property, and dispute resolution mechanisms.",
      imageId: 10,
      price: 99.99,
      duration: "6 weeks",
      level: "Intermediate",
      certification: true,
      targetAudience: "Legal professionals, real estate agents, property owners, and individuals interested in property law",
      modules: [
        { title: "Introduction to Property Law", description: "Overview of property law concepts in Bangladesh", duration: "1 week" },
        { title: "Land Registration Process", description: "Detailed study of the land registration system", duration: "1 week" },
        { title: "Transfer of Property", description: "Legal aspects of buying, selling, and transferring property", duration: "1 week" },
        { title: "Leases and Tenancy", description: "Understanding lease agreements and tenancy laws", duration: "1 week" },
        { title: "Property Disputes", description: "Common property disputes and resolution mechanisms", duration: "1 week" },
        { title: "Recent Developments", description: "Recent changes in property law and their implications", duration: "1 week" },
      ],
      instructor: {
        name: "Adv. Nasreen Akter",
        title: "Property Law Specialist",
        bio: "Adv. Nasreen Akter has over 20 years of experience in property law and has successfully handled numerous high-profile property disputes.",
        imageUrl: "/placeholder.svg?height=100&width=100&text=NA"
      },
      learningOutcomes: [
        "Understand the fundamental concepts of property law in Bangladesh",
        "Learn about the land registration process and its importance",
        "Gain knowledge about the legal aspects of property transfer",
        "Understand lease agreements and tenancy laws",
        "Learn about common property disputes and their resolution",
        "Stay updated on recent developments in property law"
      ],
      interactiveElements: [
        "Virtual land registration process simulation",
        "Case studies on property disputes",
        "Drafting exercises for property-related legal documents"
      ],
      materials: [
        "Comprehensive textbook on Property Law in Bangladesh",
        "Templates for property-related legal documents",
        "Access to land records database (for educational purposes)"
      ],
      faqs: [
        { question: "Will this course help me with my personal property issues?", answer: "While the course provides valuable information about property law, for specific legal issues, we always recommend consulting with a qualified legal professional." },
        { question: "Does this course cover rural land laws?", answer: "Yes, the course includes sections on both urban and rural property laws, including specific regulations pertaining to agricultural lands." }
      ],
      relatedCourses: [
        { title: "Civil Procedure Code: A Comprehensive Study", href: "/courses/civil-procedure" },
        { title: "Contract Disputes and Remedies", href: "/courses/contract-disputes" }
      ]
    },
    {
      id: "civil-procedure",
      title: "Civil Procedure Code: A Comprehensive Study",
      description: "Master the Civil Procedure Code of Bangladesh. Learn about filing suits, court procedures, and the appeals process in civil cases.",
      imageId: 11,
      price: 89.99,
      duration: "8 weeks",
      level: "Advanced",
      certification: true,
      targetAudience: "Law students, legal professionals, and individuals seeking in-depth knowledge of civil procedure in Bangladesh",
      modules: [
        { title: "Introduction to Civil Procedure", description: "Overview of the civil justice system in Bangladesh", duration: "1 week" },
        { title: "Jurisdiction and Res Judicata", description: "Understanding court jurisdiction and the concept of res judicata", duration: "1 week" },
        { title: "Pleadings and Suits", description: "Drafting plaints, written statements, and other pleadings", duration: "1 week" },
        { title: "Trial Procedures", description: "Step-by-step guide to civil trial proceedings", duration: "2 weeks" },
        { title: "Judgments and Decrees", description: "Understanding different types of judgments and their execution", duration: "1 week" },
        { title: "Appeals and Revisions", description: "Procedures for appealing civil court decisions", duration: "1 week" },
        { title: "Alternative Dispute Resolution", description: "Overview of ADR mechanisms in civil disputes", duration: "1 week" },
      ],
      instructor: {
        name: "Justice Farid Ahmed",
        title: "Former High Court Judge",
        bio: "Justice Farid Ahmed served on the High Court Division of the Supreme Court of Bangladesh for 12 years and is a renowned expert in civil procedure.",
        imageUrl: "/placeholder.svg?height=100&width=100&text=FA"
      },
      learningOutcomes: [
        "Gain a comprehensive understanding of the Civil Procedure Code of Bangladesh",
        "Learn how to draft various pleadings and legal documents for civil cases",
        "Understand the step-by-step process of civil trials",
        "Learn about different types of judgments and their execution",
        "Understand the procedures for appealing civil court decisions",
        "Gain knowledge about alternative dispute resolution mechanisms"
      ],
      interactiveElements: [
        "Mock civil trial simulations",
        "Drafting exercises for various civil court documents",
        "Case study analyses of landmark civil cases"
      ],
      materials: [
        "Comprehensive textbook on the Civil Procedure Code of Bangladesh",
        "Templates for various civil court documents",
        "Access to online legal databases for case law research"
      ],
      faqs: [
        { question: "Is this course suitable for non-lawyers?", answer: "While the course is designed primarily for legal professionals and law students, motivated individuals from other backgrounds can also benefit from it. However, some basic understanding of legal concepts is recommended." },
        { question: "Will this course cover recent amendments to the Civil Procedure Code?", answer: "Yes, the course content is regularly updated to include recent amendments and their implications on civil procedure." }
      ],
      relatedCourses: [
        { title: "Property Law and Land Rights", href: "/courses/property-law" },
        { title: "Contract Disputes and Remedies", href: "/courses/contract-disputes" }
      ]
    },
    // ... other civil law courses ...

    // Legal Writing Courses
    {
      id: "legal-drafting",
      title: "Legal Drafting: Contracts and Agreements",
      description: "Master the art of drafting clear and effective legal documents. This course covers contract drafting, clauses, and best practices in legal writing.",
      imageId: 12,
      price: 89.99,
      duration: "6 weeks",
      level: "Intermediate",
      certification: true,
      targetAudience: "Legal professionals, paralegals, law students, and business professionals involved in contract management",
      modules: [
        { title: "Principles of Legal Drafting", description: "Fundamental concepts and best practices in legal writing", duration: "1 week" },
        { title: "Contract Structure and Format", description: "Understanding the key components of a well-structured contract", duration: "1 week" },
        { title: "Drafting Clear and Concise Clauses", description: "Techniques for writing unambiguous contract clauses", duration: "1 week" },
        { title: "Common Contract Provisions", description: "In-depth look at standard clauses in various types of contracts", duration: "1 week" },
        { title: "Negotiating and Revising Contracts", description: "Strategies for effective contract negotiation and revision", duration: "1 week" },
        { title: "Specialized Agreements", description: "Drafting specific types of agreements (e.g., NDAs, employment contracts)", duration: "1 week" },
      ],
      instructor: {
        name: "Adv. Tahmina Rahman",
        title: "Legal Drafting Expert",
        bio: "Adv. Tahmina Rahman has over 15 years of experience in contract law and has drafted agreements for multinational corporations and government agencies.",
        imageUrl: "/placeholder.svg?height=100&width=100&text=TR"
      },
      learningOutcomes: [
        "Master the principles of clear and effective legal writing",
        "Learn how to structure and format various types of contracts",
        "Develop skills in drafting unambiguous and enforceable contract clauses",
        "Understand common contract provisions and their implications",
        "Gain strategies for negotiating and revising contracts",
        "Learn how to draft specialized agreements for specific purposes"
      ],
      interactiveElements: [
        "Contract drafting workshops with peer review",
        "Clause revision exercises",
        "Mock contract negotiation sessions"
      ],
      materials: [
        "Comprehensive guide to legal drafting and contract writing",
        "Templates for various types of contracts and agreements",
        "Access to a clause library for reference"
      ],
      faqs: [
        { question: "Is this course suitable for non-lawyers?", answer: "Yes, while the course is beneficial for legal professionals, it's designed to be accessible and valuable for business professionals involved in contract management as well." },
        { question: "Will this course cover international contract drafting?", answer: "The primary focus is on drafting contracts under Bangladesh law, but we do touch upon international aspects and best practices in global contract drafting." }
      ],
      relatedCourses: [
        { title: "Legal Research and Citation", href: "/courses/legal-research" },
        { title: "Professional Legal Correspondence", href: "/courses/legal-correspondence" }
      ]
    },
    {
      id: "legal-research",
      title: "Legal Research and Citation",
      description: "Learn advanced legal research techniques and proper citation methods. This course covers both online and offline research resources relevant to Bangladesh law.",
      imageId: 13,
      price: 79.99,
      duration: "4 weeks",
      level: "Intermediate",
      certification: true,
      targetAudience: "Law students, legal professionals, paralegals, and researchers in the legal field",
      modules: [
        { title: "Fundamentals of Legal Research", description: "Introduction to legal research methodologies", duration: "1 week" },
        { title: "Online Legal Research Tools", description: "Utilizing digital databases and online resources", duration: "1 week" },
        { title: "Offline Research Techniques", description: "Navigating law libraries and print resources", duration: "1 week" },
        { title: "Legal Citation Methods", description: "Proper citation techniques for legal documents", duration: "1 week" },
      ],
      instructor: {
        name: "Dr. Shahida Begum",
        title: "Legal Research Specialist",
        bio: "Dr. Shahida Begum is a renowned legal researcher with over 20 years of experience in academia and has published numerous articles in international law journals.",
        imageUrl: "/placeholder.svg?height=100&width=100&text=SB"
      },
      learningOutcomes: [
        "Master fundamental legal research methodologies",
        "Learn to effectively use online legal databases and resources",
        "Develop skills in navigating traditional law libraries and print resources",
        "Understand and apply proper legal citation methods",
        "Enhance critical thinking and analysis skills in legal research"
      ],
      interactiveElements: [
        "Hands-on research exercises using online databases",
        "Virtual law library navigation simulations",
        "Citation practice workshops"
      ],
      materials: [
        "Comprehensive guide to legal research methods",
        "Access to online legal research databases",
        "Legal citation style guide"
      ],
      faqs: [
        { question: "Do I need prior experience in legal research to take this course?", answer: "While some basic understanding of law is helpful, the course is designed to be accessible to beginners in legal research as well." },
        { question: "Will this course cover international legal research methods?", answer: "The primary focus is on researching Bangladesh law, but we do introduce international legal research methods and resources." }
      ],
      relatedCourses: [
        { title: "Legal Drafting: Contracts and Agreements", href: "/courses/legal-drafting" },
        { title: "Legal Analysis and Writing", href: "/courses/legal-analysis" }
      ]
    },
    // ... other legal writing courses ...

    // International Law Courses
    {
      id: "public-international-law",
      title: "Public International Law",
      description: "Explore the principles and practices of public international law. This course covers international treaties, state responsibility, and dispute resolution mechanisms.",
      imageId: 14,
      price: 109.99,
      duration: "8 weeks",
      level: "Advanced",
      certification: true,
      targetAudience: "Law students, legal professionals, diplomats, and individuals interested in international relations",
      modules: [
        { title: "Introduction to Public International Law", description: "Fundamental concepts and sources of international law", duration: "1 week" },
        { title: "International Treaties", description: "Formation, interpretation, and application of treaties", duration: "1 week" },
        { title: "State Responsibility", description: "Principles of state responsibility in international law", duration: "1 week" },
        { title: "International Organizations", description: "Role and functions of major international organizations", duration: "1 week" },
        { title: "International Human Rights Law", description: "Overview of international human rights frameworks", duration: "1 week" },
        { title: "International Environmental Law", description: "Key principles and agreements in environmental protection", duration: "1 week" },
        { title: "International Dispute Resolution", description: "Mechanisms for resolving disputes between states", duration: "1 week" },
        { title: "Current Issues in International Law", description: "Analysis of contemporary international legal challenges", duration: "1 week" },
      ],
      instructor: {
        name: "Prof. Mahbub Alam",
        title: "International Law Expert",
        bio: "Prof. Mahbub Alam has over 25 yearsof experience in international law and has served as a consultant to various international organizations.",
        imageUrl: "/placeholder.svg?height=100&width=100&text=MA"
      },
      learningOutcomes: [
        "Understand the fundamental principles and sources of public international law",
        "Learn about the formation, interpretation, and application of international treaties",
        "Gain knowledge about state responsibility in international law",
        "Understand the role and functions of major international organizations",
        "Learn about international human rights and environmental law frameworks",
        "Understand mechanisms for resolving disputes between states",
        "Analyze current issues and challenges in international law"
      ],
      interactiveElements: [
        "Mock international treaty negotiations",
        "Case studies on landmark international law cases",
        "Simulations of international dispute resolution processes"
      ],
      materials: [
        "Comprehensive textbook on Public International Law",
        "Access to international law databases and treaty collections",
        "Curated selection of key international legal instruments"
      ],
      faqs: [
        { question: "Is this course relevant for practicing lawyers in Bangladesh?", answer: "Yes, with increasing globalization, understanding international law is becoming crucial for lawyers in all jurisdictions, including Bangladesh." },
        { question: "Does this course cover international criminal law?", answer: "While we touch upon international criminal law, it is not the primary focus of this course. We offer a separate course specifically on International Criminal Law." }
      ],
      relatedCourses: [
        { title: "International Trade Law", href: "/courses/international-trade-law" },
        { title: "International Human Rights Law", href: "/courses/human-rights-law" }
      ]
    },
    {
      id: "international-trade-law",
      title: "International Trade Law",
      description: "Understand the legal framework governing international trade. This course covers WTO agreements, trade disputes, and Bangladesh's position in global trade.",
      imageId: 15,
      price: 99.99,
      duration: "6 weeks",
      level: "Advanced",
      certification: true,
      targetAudience: "Legal professionals, business executives, trade officials, and students interested in international trade",
      modules: [
        { title: "Introduction to International Trade Law", description: "Overview of the global trade system and key concepts", duration: "1 week" },
        { title: "World Trade Organization", description: "Structure, functions, and key agreements of the WTO", duration: "1 week" },
        { title: "Trade in Goods and Services", description: "Legal aspects of international trade in goods and services", duration: "1 week" },
        { title: "Intellectual Property in Trade", description: "TRIPS agreement and IP protection in international trade", duration: "1 week" },
        { title: "Trade Disputes and Resolution", description: "WTO dispute settlement mechanism and case studies", duration: "1 week" },
        { title: "Bangladesh in Global Trade", description: "Bangladesh's trade agreements and position in world trade", duration: "1 week" },
      ],
      instructor: {
        name: "Dr. Farhana Chowdhury",
        title: "International Trade Law Specialist",
        bio: "Dr. Farhana Chowdhury has over 20 years of experience in international trade law and has represented Bangladesh in various international trade negotiations.",
        imageUrl: "/placeholder.svg?height=100&width=100&text=FC"
      },
      learningOutcomes: [
        "Understand the fundamental principles of international trade law",
        "Gain knowledge about the WTO and its key agreements",
        "Learn about the legal aspects of trade in goods and services",
        "Understand intellectual property protection in international trade",
        "Learn about trade dispute resolution mechanisms",
        "Analyze Bangladesh's position and agreements in global trade"
      ],
      interactiveElements: [
        "Simulations of trade negotiations",
        "Case studies on international trade disputes",
        "Analysis of trade agreements and their implications"
      ],
      materials: [
        "Comprehensive textbook on International Trade Law",
        "Access to WTO legal texts and case reports",
        "Curated collection of Bangladesh's trade agreements"
      ],
      faqs: [
        { question: "Is this course suitable for non-lawyers?", answer: "Yes, while legal knowledge is helpful, the course is designed to be accessible to business professionals and others involved in international trade." },
        { question: "Will this course cover regional trade agreements?", answer: "Yes, we cover regional trade agreements, with a particular focus on those relevant to Bangladesh and South Asia." }
      ],
      relatedCourses: [
        { title: "Public International Law", href: "/courses/public-international-law" },
        { title: "Cross-Border Trade Laws", href: "/courses/cross-border-trade" }
      ]
    },
    // ... other international law courses ...
  ]

  return courses.find(course => course.id === courseId)
}
interface Params {
  courseId: string
}

export default async function CoursePage(props: { params: Promise<Params> }) {
  const params = await props.params;
  const courseDetails = getCourseDetails(params.courseId)

  if (!courseDetails) {
    return <div>Course not found</div>
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <CourseDetails {...courseDetails} />
    </div>
  )
}

