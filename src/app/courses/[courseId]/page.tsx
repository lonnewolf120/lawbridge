"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Layout from "@/components/Navbar"
import { BackButton } from "@/components/back-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, FileText, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

function getCourseDetails(courseId: string) {
  const courses = [
    {
      id: "marriage-laws",
      title: "Marriage Laws and Procedures in Bangladesh",
      sections: [
        {
          title: "Legal Framework of Marriage in Bangladesh",
          content: "Overview of marriage laws in Bangladesh.",
        },
        {
          title: "Muslim Marriage Laws and Procedures",
          content: "Details on Muslim marriage laws and procedures.",
        },
        {
          title: "Hindu Marriage Laws and Customs",
          content: "Information on Hindu marriage laws and customs.",
        },
        {
          title: "Christian Marriage Procedures",
          content: "Explanation of Christian marriage procedures.",
        },
        {
          title: "Civil Marriage and Special Marriage Act",
          content: "Details on civil marriages and the Special Marriage Act.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Muslim Family Laws Ordinance 1961",
          link: "https://www.law.gov.bd/acts/muslim-family-laws-ordinance-1961.pdf",
        },
        {
          type: "document",
          name: "Hindu Marriage Registration Act 2012",
          link: "https://www.law.gov.bd/acts/hindu-marriage-registration-act-2012.pdf",
        },
        {
          type: "document",
          name: "Christian Marriage Act 1872",
          link: "https://www.law.gov.bd/acts/christian-marriage-act-1872.pdf",
        },
        {
          type: "document",
          name: "Special Marriage Act 1872",
          link: "https://www.law.gov.bd/acts/special-marriage-act-1872.pdf",
        },
      ],
    },
    {
      id: "divorce-laws",
      title: "Divorce Laws: Rights and Processes",
      sections: [
        {
          title: "Overview of Divorce Laws in Bangladesh",
          content:
            "Divorce laws in Bangladesh vary based on religious affiliations and are governed by personal laws as well as some statutory provisions. The process and grounds for divorce differ significantly for Muslims, Hindus, and Christians.",
        },
        {
          title: "Muslim Divorce Laws",
          content:
            "For Muslims, divorce can be initiated by either spouse. The most common form is 'talaq' (divorce by the husband). The Muslim Family Laws Ordinance 1961 regulates the process, requiring notice to be given to the Union Council Chairman.",
        },
        {
          title: "Hindu Divorce Laws",
          content:
            "Traditionally, Hindu personal law in Bangladesh did not recognize divorce. However, the Hindu Marriage Registration Act 2012 now provides for divorce in certain circumstances, such as cruelty, desertion, or conversion to another religion.",
        },
        {
          title: "Christian Divorce Laws",
          content:
            "Christian divorces are governed by the Divorce Act 1869, which allows for divorce on grounds such as adultery, cruelty, or desertion. The process typically involves court proceedings.",
        },
        {
          title: "Civil Divorce Procedures",
          content:
            "For marriages conducted under the Special Marriage Act 1872, divorces are governed by the same act, which provides for divorce on grounds similar to those in Christian law.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Muslim Family Laws Ordinance 1961",
          link: "https://www.law.gov.bd/acts/muslim-family-laws-ordinance-1961.pdf",
        },
        {
          type: "document",
          name: "Hindu Marriage Registration Act 2012",
          link: "https://www.law.gov.bd/acts/hindu-marriage-registration-act-2012.pdf",
        },
        { type: "document", name: "Divorce Act 1869", link: "https://www.law.gov.bd/acts/divorce-act-1869.pdf" },
        {
          type: "document",
          name: "Special Marriage Act 1872",
          link: "https://www.law.gov.bd/acts/special-marriage-act-1872.pdf",
        },
      ],
    },
    {
      id: "inheritance-laws",
      title: "Understanding Inheritance Laws",
      sections: [
        {
          title: "Inheritance Laws in Bangladesh: An Overview",
          content:
            "Inheritance laws in Bangladesh are primarily governed by religious personal laws, with some statutory interventions. The application of these laws varies significantly depending on the religion of the deceased.",
        },
        {
          title: "Muslim Inheritance Laws",
          content:
            "Muslim inheritance is governed by Islamic law (Sharia). The Muslim Personal Law (Shariat) Application Act 1937 ensures that Muslim personal law applies to inheritance matters for Muslims.",
        },
        {
          title: "Hindu Inheritance Laws",
          content:
            "Hindu inheritance law in Bangladesh is based on ancient Hindu legal texts and customs. The Hindu Inheritance (Removal of Disabilities) Act 1928 and the Hindu Women's Rights to Property Act 1937 have brought some reforms.",
        },
        {
          title: "Christian and Other Inheritance Laws",
          content:
            "Christian inheritance in Bangladesh is governed by the Succession Act 1925, which provides for equal distribution among heirs regardless of gender. This act also applies to Parsis and to those married under the Special Marriage Act 1872.",
        },
        {
          title: "Statutory Interventions and Recent Developments",
          content:
            "Recent legal developments and court decisions have aimed to address gender disparities in inheritance laws. However, challenges remain in ensuring equal inheritance rights across all communities.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Muslim Personal Law (Shariat) Application Act 1937",
          link: "https://www.law.gov.bd/acts/muslim-personal-law-application-act-1937.pdf",
        },
        {
          type: "document",
          name: "Hindu Inheritance (Removal of Disabilities) Act 1928",
          link: "https://www.law.gov.bd/acts/hindu-inheritance-act-1928.pdf",
        },
        {
          type: "document",
          name: "Hindu Women's Rights to Property Act 1937",
          link: "https://www.law.gov.bd/acts/hindu-womens-rights-act-1937.pdf",
        },
        { type: "document", name: "Succession Act 1925", link: "https://www.law.gov.bd/acts/succession-act-1925.pdf" },
      ],
    },
    {
      id: "child-custody",
      title: "Child Custody and Guardianship",
      sections: [
        {
          title: "Legal Framework for Child Custody in Bangladesh",
          content:
            "Child custody and guardianship laws in Bangladesh are primarily governed by personal laws based on religion, with some overarching civil laws applicable in specific cases.",
        },
        {
          title: "Muslim Law on Child Custody",
          content:
            "In Muslim law, the concept of 'hizanat' (custody) gives preference to the mother for custody of young children, typically until boys reach seven years and girls reach puberty. After this age, custody generally transfers to the father.",
        },
        {
          title: "Hindu Law on Child Custody",
          content:
            "In Hindu law, there is no specific provision for child custody. Traditionally, the father is considered the natural guardian of the child. However, courts often consider the welfare of the child as paramount in custody decisions.",
        },
        {
          title: "Christian Law and Civil Law on Child Custody",
          content:
            "For Christian families and those married under civil law, custody matters are generally decided based on the principle of the best interests of the child, as interpreted by the courts.",
        },
        {
          title: "The Guardian and Wards Act 1890",
          content:
            "This act applies to all communities and allows courts to appoint guardians for minors. It provides a framework for resolving custody disputes when personal laws are unclear or in conflict.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Guardian and Wards Act 1890",
          link: "https://www.law.gov.bd/acts/guardian-and-wards-act-1890.pdf",
        },
        {
          type: "document",
          name: "Family Courts Ordinance 1985",
          link: "https://www.law.gov.bd/acts/family-courts-ordinance-1985.pdf",
        },
        { type: "document", name: "Children Act 2013", link: "https://www.law.gov.bd/acts/children-act-2013.pdf" },
      ],
    },
    {
      id: "domestic-violence",
      title: "Domestic Violence Laws and Remedies",
      sections: [
        {
          title: "Understanding Domestic Violence in Bangladesh",
          content:
            "Domestic violence is a significant issue in Bangladesh, affecting individuals across all social strata. The legal framework to address it has evolved significantly in recent years.",
        },
        {
          title: "The Domestic Violence (Prevention and Protection) Act 2010",
          content:
            "This is the primary legislation dealing with domestic violence in Bangladesh. It provides a broad definition of domestic violence, encompassing physical, psychological, sexual, and economic abuse.",
        },
        {
          title: "Legal Remedies and Protection Orders",
          content:
            "The Act allows victims to seek protection orders, residence orders, and compensation orders from the court. Victims can file complaints with the police, enforcement officers, or directly with the court.",
        },
        {
          title: "Role of Law Enforcement and Support Services",
          content:
            "The Act provides for the appointment of enforcement officers to assist victims in accessing legal and medical services. It also mandates the creation of shelter homes for victims and emphasizes the importance of counseling.",
        },
        {
          title: "Challenges and Recent Developments",
          content:
            "Despite legal provisions, challenges remain in the effective implementation of domestic violence laws. Recent initiatives focus on raising awareness, improving support services, and enhancing the responsiveness of the legal system.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Domestic Violence (Prevention and Protection) Act 2010",
          link: "https://www.law.gov.bd/acts/domestic-violence-act-2010.pdf",
        },
        {
          type: "document",
          name: "Penal Code 1860 (Relevant Sections)",
          link: "https://www.law.gov.bd/acts/penal-code-1860.pdf",
        },
        {
          type: "document",
          name: "Women and Children Repression Prevention Act 2000",
          link: "https://www.law.gov.bd/acts/women-children-repression-prevention-act-2000.pdf",
        },
      ],
    },
    {
      id: "contract-law",
      title: "Contract Law and Negotiation",
      sections: [
        {
          title: "Fundamentals of Contract Law in Bangladesh",
          content:
            "Contract law in Bangladesh is primarily governed by the Contract Act 1872, a legislation inherited from the British colonial era. This Act defines the essential elements of a valid contract.",
        },
        {
          title: "Elements of a Valid Contract",
          content:
            "The Contract Act 1872 outlines the components necessary for a legally binding agreement, including offer, acceptance, consideration, capacity to contract, free consent, and lawful object.",
        },
        {
          title: "Types of Contracts and Their Formation",
          content:
            "Bangladeshi law recognizes various types of contracts, including express and implied contracts, void and voidable contracts, and unilateral and bilateral contracts.",
        },
        {
          title: "Breach of Contract and Remedies",
          content:
            "When a contract is breached, Bangladeshi law provides several remedies to the aggrieved party. These include damages, specific performance, and injunctions.",
        },
        {
          title: "Negotiation Strategies in the Bangladeshi Context",
          content:
            "Effective negotiation is crucial in the Bangladeshi business landscape, where relationships and cultural nuances play a significant role.",
        },
      ],
      resources: [
        { type: "document", name: "Contract Act 1872", link: "https://www.law.gov.bd/acts/contract-act-1872.pdf" },
        {
          type: "document",
          name: "Specific Relief Act 1877",
          link: "https://www.law.gov.bd/acts/specific-relief-act-1877.pdf",
        },
        {
          type: "document",
          name: "Sale of Goods Act 1930",
          link: "https://www.law.gov.bd/acts/sale-of-goods-act-1930.pdf",
        },
      ],
    },
    {
      id: "company-law",
      title: "Company Law and Corporate Governance",
      sections: [
        {
          title: "Introduction to Company Law in Bangladesh",
          content:
            "Company law in Bangladesh is primarily governed by the Companies Act 1994, which provides the legal framework for the formation, operation, and dissolution of companies.",
        },
        {
          title: "Types of Companies and Formation Procedures",
          content:
            "Bangladesh recognizes several types of companies, including private limited companies, public limited companies, and companies limited by guarantee. Each type has distinct characteristics and formation requirements.",
        },
        {
          title: "Corporate Governance Framework",
          content:
            "Corporate governance in Bangladesh has evolved significantly, particularly with the introduction of the Corporate Governance Code 2018 by the Bangladesh Securities and Exchange Commission (BSEC).",
        },
        {
          title: "Directors' Duties and Liabilities",
          content:
            "Directors in Bangladeshi companies have significant responsibilities and face potential liabilities. Their duties include fiduciary obligations to act in the best interest of the company.",
        },
        {
          title: "Corporate Finance and Capital Markets",
          content:
            "The legal framework for corporate finance in Bangladesh covers various aspects such as share capital, debentures, and dividend policies.",
        },
      ],
      resources: [
        { type: "document", name: "Companies Act 1994", link: "https://www.law.gov.bd/acts/companies-act-1994.pdf" },
        {
          type: "document",
          name: "Corporate Governance Code 2018",
          link: "https://www.sec.gov.bd/slaws/Corporate_Governance_Code_2018.pdf",
        },
        {
          type: "document",
          name: "Securities and Exchange Ordinance 1969",
          link: "https://www.law.gov.bd/acts/securities-and-exchange-ordinance-1969.pdf",
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      sections: [
        {
          title: "Overview of Intellectual Property Law in Bangladesh",
          content:
            "Intellectual property (IP) law in Bangladesh encompasses a range of legal protections for creations of the mind. Key areas include patents, trademarks, copyrights, and industrial designs.",
        },
        {
          title: "Patent Law and Protection of Inventions",
          content:
            "Patent law in Bangladesh is governed by the Patents and Designs Act, 1911, with amendments in 2003. This law provides for the protection of inventions for a period of 16 years from the date of filing.",
        },
        {
          title: "Trademark Law and Brand Protection",
          content:
            "The Trademarks Act, 2009 governs trademark protection in Bangladesh. It provides for the registration and protection of trademarks, service marks, and collective marks.",
        },
        {
          title: "Copyright Law and Creative Works",
          content:
            "Copyright protection in Bangladesh is provided under the Copyright Act, 2000 (amended in 2005). This law protects literary, dramatic, musical, and artistic works, as well as computer programs and databases.",
        },
        {
          title: "IP Enforcement and Emerging Issues",
          content:
            "Enforcement of IP rights in Bangladesh involves both civil and criminal remedies. The judiciary has been playing an increasingly important role in shaping IP jurisprudence. Emerging issues include the protection of traditional knowledge and geographical indications, as well as the challenges posed by digital technologies.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Patents and Designs Act, 1911",
          link: "https://www.law.gov.bd/acts/patents-and-designs-act-1911.pdf",
        },
        { type: "document", name: "Trademarks Act, 2009", link: "https://www.law.gov.bd/acts/trademarks-act-2009.pdf" },
        { type: "document", name: "Copyright Act, 2000", link: "https://www.law.gov.bd/acts/copyright-act-2000.pdf" },
        {
          type: "document",
          name: "Geographical Indication of Goods (Registration and Protection) Act, 2013",
          link: "https://www.law.gov.bd/acts/geographical-indication-act-2013.pdf",
        },
      ],
    },
    {
      id: "labor-law",
      title: "Labor Law and Employee Rights",
      sections: [
        {
          title: "Introduction to Labor Law in Bangladesh",
          content:
            "Labor law in Bangladesh is primarily governed by the Bangladesh Labour Act, 2006, which has undergone several amendments to align with international labor standards.",
        },
        {
          title: "Employment Contracts and Working Conditions",
          content:
            "The Labour Act sets out detailed provisions on employment contracts, working hours, leave entitlements, and minimum wage regulations.",
        },
        {
          title: "Trade Unions and Collective Bargaining",
          content:
            "Workers in Bangladesh have the right to form and join trade unions, although there are some restrictions, particularly in export processing zones.",
        },
        {
          title: "Termination of Employment and Workers' Compensation",
          content:
            "The law provides for various grounds for termination of employment, including misconduct, incapacity, and retrenchment. It also sets out procedures for termination and the calculation of severance pay.",
        },
        {
          title: "Special Provisions for Women and Child Workers",
          content:
            "Bangladesh labor law includes special provisions for women workers, including maternity benefits and protection against discrimination. The law prohibits the employment of children under 14 years of age, with exceptions for light work.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Bangladesh Labour Act, 2006",
          link: "https://www.law.gov.bd/acts/bangladesh-labour-act-2006.pdf",
        },
        {
          type: "document",
          name: "Bangladesh Labour Rules, 2015",
          link: "https://www.law.gov.bd/acts/bangladesh-labour-rules-2015.pdf",
        },
        { type: "document", name: "Factories Act, 1965", link: "https://www.law.gov.bd/acts/factories-act-1965.pdf" },
      ],
    },
    {
      id: "tax-law",
      title: "Taxation Law for Businesses",
      sections: [
        {
          title: "Overview of the Bangladesh Tax System",
          content:
            "The tax system in Bangladesh is administered by the National Board of Revenue (NBR) under the Ministry of Finance. The primary types of taxes include income tax, value-added tax (VAT), and customs duty.",
        },
        {
          title: "Corporate Income Tax",
          content:
            "Corporate income tax is a significant source of revenue for the Bangladesh government. The tax rates vary depending on the type of company, with publicly traded companies generally enjoying lower rates compared to non-publicly traded companies.",
        },
        {
          title: "Value Added Tax (VAT)",
          content:
            "The VAT system in Bangladesh underwent significant reform with the introduction of the Value Added Tax and Supplementary Duty Act, 2012. This act aims to modernize the VAT system and bring it in line with international standards.",
        },
        {
          title: "International Taxation and Transfer Pricing",
          content:
            "As Bangladesh's economy becomes more integrated with the global market, international taxation issues have gained prominence. The country has double taxation agreements with numerous countries to prevent double taxation of income.",
        },
        {
          title: "Tax Compliance and Dispute Resolution",
          content:
            "Tax compliance procedures in Bangladesh include the filing of returns, maintenance of proper books of accounts, and submission to tax audits when required. The dispute resolution process includes administrative appeals to tax authorities and further appeals to the taxes appellate tribunal and the courts.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Income Tax Ordinance, 1984",
          link: "https://www.law.gov.bd/acts/income-tax-ordinance-1984.pdf",
        },
        {
          type: "document",
          name: "Value Added Tax and Supplementary Duty Act, 2012",
          link: "https://www.law.gov.bd/acts/vat-act-2012.pdf",
        },
        { type: "document", name: "Customs Act, 1969", link: "https://www.law.gov.bd/acts/customs-act-1969.pdf" },
      ],
    },
    {
      id: "criminal-procedure",
      title: "Criminal Procedure in Bangladesh",
      sections: [
        {
          title: "Introduction to Criminal Procedure",
          content:
            "The criminal justice system in Bangladesh is primarily governed by the Code of Criminal Procedure, 1898 (CrPC), a colonial-era law that has undergone several amendments to adapt to modern needs.",
        },
        {
          title: "Pre-trial Procedures",
          content:
            "Pre-trial procedures in Bangladesh begin with the filing of a First Information Report (FIR) with the police or a complaint directly to the court. The police have the power to investigate crimes, make arrests, and collect evidence.",
        },
        {
          title: "Trial Process",
          content:
            "The trial process in Bangladesh varies depending on the nature of the offense and the court in which it is tried. For serious offenses, trials are conducted in Sessions Courts, while less serious offenses are tried in Magistrates' Courts.",
        },
        {
          title: "Judgement and Sentencing",
          content:
            "After the conclusion of the trial, the court delivers its judgment, which must be pronounced in open court. If the accused is convicted, the court proceeds to sentencing.",
        },
        {
          title: "Appeals and Revisions",
          content:
            "The CrPC provides for a hierarchical system of appeals and revisions. Convictions by Magistrates' Courts can be appealed to Sessions Courts, while convictions by Sessions Courts can be appealed to the High Court Division of the Supreme Court.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Code of Criminal Procedure, 1898",
          link: "https://www.law.gov.bd/acts/code-of-criminal-procedure-1898.pdf",
        },
        { type: "document", name: "Evidence Act, 1872", link: "https://www.law.gov.bd/acts/evidence-act-1872.pdf" },
        {
          type: "document",
          name: "Supreme Court (High Court Division) Rules, 1973",
          link: "https://www.supremecourt.gov.bd/web/documents/hcd_rules_1973.pdf",
        },
      ],
    },
    {
      id: "penal-code",
      title: "Bangladesh Penal Code: In-depth Analysis",
      sections: [
        {
          title: "Historical Background and Structure of the Penal Code",
          content:
            "The Bangladesh Penal Code, originally enacted in 1860 during the British colonial era, remains the primary criminal code of Bangladesh. This comprehensive legislation defines various criminal offenses and prescribes punishments for them.",
        },
        {
          title: "General Principles of Criminal Liability",
          content:
            "The Penal Code establishes fundamental principles of criminal liability, including the concepts of actus reus (guilty act) and mens rea (guilty mind). It defines various forms of criminal intention and knowledge.",
        },
        {
          title: "Offenses Against the State and Public Tranquility",
          content:
            "This section of the Penal Code deals with serious offenses such as sedition, waging war against the state, and offenses related to unlawful assembly and rioting.",
        },
        {
          title: "Offenses Against the Human Body",
          content:
            "The Penal Code provides a detailed framework for offenses against the human body, including various degrees of homicide, hurt, wrongful restraint, and assault.",
        },
        {
          title: "Property Offenses and Emerging Crimes",
          content:
            "While the Penal Code extensively covers traditional property offenses such as theft, extortion, and cheating, it has been supplemented by special laws to address emerging forms of crime, such as cybercrime.",
        },
      ],
      resources: [
        { type: "document", name: "Penal Code, 1860", link: "https://www.law.gov.bd/acts/penal-code-1860.pdf" },
        {
          type: "document",
          name: "Anti-Terrorism Act, 2009",
          link: "https://www.law.gov.bd/acts/anti-terrorism-act-2009.pdf",
        },
        {
          type: "document",
          name: "Information and Communication Technology Act, 2006",
          link: "https://www.law.gov.bd/acts/ict-act-2006.pdf",
        },
      ],
    },
    {
      id: "evidence-law",
      title: "Law of Evidence in Criminal Cases",
      sections: [
        {
          title: "Introduction to Evidence Law in Bangladesh",
          content:
            "The law of evidence in Bangladesh is primarily governed by the Evidence Act, 1872. This Act provides the framework for the admissibility and evaluation of evidence in both civil and criminal proceedings.",
        },
        {
          title: "Types of Evidence",
          content:
            "The Evidence Act recognizes various types of evidence, including oral evidence, documentary evidence, and physical evidence. It also defines the concept of primary and secondary evidence.",
        },
        {
          title: "Admissibility of Evidence",
          content:
            "The Act lays down rules for the admissibility of evidence, including the hearsay rule, the best evidence rule, and exceptions to these rules. It also covers issues of relevance and the exclusion of irrelevant or prejudicial evidence.",
        },
        {
          title: "Witness Testimony and Expert Evidence",
          content:
            "The Evidence Act provides rules for the examination and cross-examination of witnesses. It also covers the admissibility of expert testimony and the weight to be given to such evidence.",
        },
        {
          title: "Electronic Evidence and Recent Developments",
          content:
            "With the advancement of technology, the admissibility of electronic evidence has become increasingly important. Recent amendments and judicial decisions have addressed the challenges posed by digital evidence in criminal proceedings.",
        },
      ],
      resources: [
        { type: "document", name: "Evidence Act, 1872", link: "https://www.law.gov.bd/acts/evidence-act-1872.pdf" },
        {
          type: "document",
          name: "Information and Communication Technology Act, 2006",
          link: "https://www.law.gov.bd/acts/ict-act-2006.pdf",
        },
        {
          type: "document",
          name: "Digital Security Act, 2018",
          link: "https://www.law.gov.bd/acts/digital-security-act-2018.pdf",
        },
      ],
    },
    {
      id: "cybercrime",
      title: "Cybercrime and Digital Forensics",
      sections: [
        {
          title: "Introduction to Cybercrime Laws in Bangladesh",
          content:
            "Cybercrime laws in Bangladesh are primarily governed by the Information and Communication Technology Act, 2006 and the Digital Security Act, 2018. These laws address various forms of cybercrime and provide for their investigation and prosecution.",
        },
        {
          title: "Types of Cybercrimes",
          content:
            "The laws recognize various types of cybercrimes, including hacking, identity theft, online fraud, cyberstalking, and the distribution of illegal content online. The Digital Security Act also addresses offenses related to critical information infrastructure.",
        },
        {
          title: "Investigation and Digital Forensics",
          content:
            "The investigation of cybercrimes often involves digital forensics, which is the process of collecting, analyzing, and preserving electronic evidence. The laws provide for the establishment of specialized units and the use of advanced technological tools in cybercrime investigations.",
        },
        {
          title: "Jurisdictional Issues in Cybercrime",
          content:
            "Given the borderless nature of cybercrimes, jurisdictional issues often arise in their investigation and prosecution. The laws attempt to address these challenges by providing for extraterritorial jurisdiction in certain cases.",
        },
        {
          title: "Challenges and Future Developments",
          content:
            "The rapidly evolving nature of technology poses ongoing challenges to cybercrime law and enforcement. There is ongoing discussion about balancing cybersecurity needs with concerns about privacy and freedom of expression.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Information and Communication Technology Act, 2006",
          link: "https://www.law.gov.bd/acts/ict-act-2006.pdf",
        },
        {
          type: "document",
          name: "Digital Security Act, 2018",
          link: "https://www.law.gov.bd/acts/digital-security-act-2018.pdf",
        },
        { type: "document", name: "Evidence Act, 1872", link: "https://www.law.gov.bd/acts/evidence-act-1872.pdf" },
      ],
    },
    {
      id: "juvenile-justice",
      title: "Juvenile Justice System",
      sections: [
        {
          title: "Introduction to Juvenile Justice in Bangladesh",
          content:
            "The juvenile justice system in Bangladesh is primarily governed by the Children Act, 2013, which replaced the earlier Children Act of 1974. This law aims to protect the rights of children in conflict with the law and ensure their rehabilitation and reintegration into society.",
        },
        {
          title: "Definition of a Child and Age of Criminal Responsibility",
          content:
            "The Children Act, 2013 defines a child as anyone below the age of 18. The age of criminal responsibility is set at 9 years, with special provisions for children between 9 and 18 years old who come into conflict with the law.",
        },
        {
          title: "Juvenile Courts and Procedures",
          content:
            "The Act provides for the establishment of Children's Courts to handle cases involving juveniles. These courts follow special procedures designed to protect the rights and well-being of child offenders, including provisions for privacy and speedy trials.",
        },
        {
          title: "Alternatives to Detention and Rehabilitation",
          content:
            "The juvenile justice system in Bangladesh emphasizes alternatives to detention for child offenders, including probation, community service, and counseling. The Act also provides for the establishment of Child Development Centers for the rehabilitation of children in conflict with the law.",
        },
        {
          title: "Challenges and Recent Developments",
          content:
            "Despite the progressive nature of the Children Act, 2013, challenges remain in its implementation, including a lack of specialized facilities and trained personnel. Recent initiatives have focused on capacity building and improving coordination among various stakeholders in the juvenile justice system.",
        },
      ],
      resources: [
        { type: "document", name: "Children Act, 2013", link: "https://www.law.gov.bd/acts/children-act-2013.pdf" },
        {
          type: "document",
          name: "Probation of Offenders Ordinance, 1960",
          link: "https://www.law.gov.bd/acts/probation-of-offenders-ordinance-1960.pdf",
        },
        {
          type: "document",
          name: "UN Convention on the Rights of the Child",
          link: "https://www.ohchr.org/en/professionalinterest/pages/crc.aspx",
        },
      ],
    },
    {
      id: "property-law",
      title: "Property Law and Land Rights",
      sections: [
        {
          title: "Introduction to Property Law in Bangladesh",
          content:
            "Property law in Bangladesh is a complex area governed by a mix of statutory laws, common law principles, and customary practices. The primary legislation dealing with property rights is the Transfer of Property Act, 1882.",
        },
        {
          title: "Land Registration and Record-Keeping",
          content:
            "The Registration Act, 1908 governs the registration of documents related to immovable property. The land record-keeping system in Bangladesh, known as 'khatian', plays a crucial role in establishing ownership and resolving disputes.",
        },
        {
          title: "Tenancy Laws and Rent Control",
          content:
            "Various laws govern tenancy relationships in Bangladesh, including the Premises Rent Control Act, 1991. These laws regulate rent determination, eviction procedures, and the rights and obligations of landlords and tenants.",
        },
        {
          title: "Eminent Domain and Land Acquisition",
          content:
            'The Acquisition and Requisition of Immovable Property Act, 2017 governs the process by which the            "The Acquisition and Requisition of Immovable Property Act, 2017 governs the process by which the government can acquire private land for public purposes. This law sets out the procedures for acquisition and the principles for determining compensation.',
        },
        {
          title: "Customary Land Rights and Indigenous Communities",
          content:
            "Bangladesh recognizes certain customary land rights, particularly in the Chittagong Hill Tracts region. The Chittagong Hill Tracts Land Dispute Resolution Commission Act, 2001 aims to address long-standing land disputes in this area.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Transfer of Property Act, 1882",
          link: "https://www.law.gov.bd/acts/transfer-of-property-act-1882.pdf",
        },
        {
          type: "document",
          name: "Registration Act, 1908",
          link: "https://www.law.gov.bd/acts/registration-act-1908.pdf",
        },
        {
          type: "document",
          name: "Acquisition and Requisition of Immovable Property Act, 2017",
          link: "https://www.law.gov.bd/acts/acquisition-and-requisition-of-immovable-property-act-2017.pdf",
        },
      ],
    },
    {
      id: "civil-procedure",
      title: "Civil Procedure Code: A Comprehensive Study",
      sections: [
        {
          title: "Introduction to Civil Procedure in Bangladesh",
          content:
            "The Civil Procedure Code (CPC) of 1908 is the primary legislation governing civil litigation in Bangladesh. It provides a comprehensive framework for the conduct of civil suits, from the filing of a case to its final disposal.",
        },
        {
          title: "Jurisdiction and Institution of Suits",
          content:
            "The CPC outlines the jurisdiction of various civil courts and the procedures for instituting suits. It covers aspects such as the proper court for filing a suit, the form and contents of plaints, and the payment of court fees.",
        },
        {
          title: "Summons and Appearance",
          content:
            "This section deals with the procedures for serving summons to defendants and the consequences of non-appearance. It also covers ex-parte proceedings and setting aside ex-parte decrees.",
        },
        {
          title: "Pleadings, Discovery, and Trial",
          content:
            "The CPC provides detailed rules on pleadings, including the filing of written statements and replications. It also covers procedures for discovery, inspection, and the conduct of trials, including the examination of witnesses and the production of evidence.",
        },
        {
          title: "Judgments, Decrees, and Appeals",
          content:
            "This section covers the pronouncement of judgments, the passing of decrees, and the procedures for appeals and revisions. It also deals with the execution of decrees and orders.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Civil Procedure Code, 1908",
          link: "https://www.law.gov.bd/acts/civil-procedure-code-1908.pdf",
        },
        {
          type: "document",
          name: "Specific Relief Act, 1877",
          link: "https://www.law.gov.bd/acts/specific-relief-act-1877.pdf",
        },
        { type: "document", name: "Limitation Act, 1908", link: "https://www.law.gov.bd/acts/limitation-act-1908.pdf" },
      ],
    },
    {
      id: "tort-law",
      title: "Tort Law and Civil Liabilities",
      sections: [
        {
          title: "Introduction to Tort Law in Bangladesh",
          content:
            "Tort law in Bangladesh, while not codified in a single statute, is based on common law principles inherited from the British legal system. It deals with civil wrongs that cause harm or loss to individuals or their property.",
        },
        {
          title: "Negligence",
          content:
            "Negligence is one of the most common torts. This section covers the elements of negligence (duty of care, breach of duty, causation, and damages), and how these are applied in Bangladeshi courts.",
        },
        {
          title: "Intentional Torts",
          content:
            "This section covers intentional torts such as assault, battery, false imprisonment, and trespass. It examines how these concepts are interpreted and applied in the Bangladeshi legal context.",
        },
        {
          title: "Defamation",
          content:
            "Defamation law in Bangladesh covers both libel and slander. This section examines the elements of defamation, defenses, and the balance between protection of reputation and freedom of expression.",
        },
        {
          title: "Emerging Areas in Tort Law",
          content:
            "This section explores emerging areas in tort law, such as environmental torts and privacy violations. It also examines how tort law principles are being applied to new technologies and social media.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Penal Code, 1860 (Relevant Sections)",
          link: "https://www.law.gov.bd/acts/penal-code-1860.pdf",
        },
        {
          type: "document",
          name: "Environmental Conservation Act, 1995",
          link: "https://www.law.gov.bd/acts/environmental-conservation-act-1995.pdf",
        },
        {
          type: "document",
          name: "Digital Security Act, 2018",
          link: "https://www.law.gov.bd/acts/digital-security-act-2018.pdf",
        },
      ],
    },
    {
      id: "contract-disputes",
      title: "Contract Disputes and Remedies",
      sections: [
        {
          title: "Overview of Contract Disputes in Bangladesh",
          content:
            "Contract disputes in Bangladesh are primarily governed by the Contract Act, 1872. This section provides an overview of common types of contract disputes and the legal framework for resolving them.",
        },
        {
          title: "Breach of Contract and Remedies",
          content:
            "This section examines what constitutes a breach of contract under Bangladeshi law and the various remedies available to the aggrieved party, including damages, specific performance, and injunctions.",
        },
        {
          title: "Alternative Dispute Resolution",
          content:
            "Bangladesh has been promoting alternative dispute resolution methods for contract disputes. This section covers arbitration, mediation, and conciliation procedures under the Arbitration Act, 2001.",
        },
        {
          title: "Litigation Procedures for Contract Disputes",
          content:
            "When alternative dispute resolution is not possible or fails, parties may resort to litigation. This section covers the procedures for filing and pursuing contract dispute cases in Bangladeshi courts.",
        },
        {
          title: "International Contract Disputes",
          content:
            "With increasing international trade, cross-border contract disputes are becoming more common. This section examines how Bangladeshi law deals with international contract disputes, including issues of jurisdiction and applicable law.",
        },
      ],
      resources: [
        { type: "document", name: "Contract Act, 1872", link: "https://www.law.gov.bd/acts/contract-act-1872.pdf" },
        {
          type: "document",
          name: "Specific Relief Act, 1877",
          link: "https://www.law.gov.bd/acts/specific-relief-act-1877.pdf",
        },
        {
          type: "document",
          name: "Arbitration Act, 2001",
          link: "https://www.law.gov.bd/acts/arbitration-act-2001.pdf",
        },
      ],
    },
    {
      id: "consumer-protection",
      title: "Consumer Protection Laws",
      sections: [
        {
          title: "Introduction to Consumer Protection in Bangladesh",
          content:
            "Consumer protection in Bangladesh is primarily governed by the Consumer Rights Protection Act, 2009. This section provides an overview of the legal framework for consumer protection and the rights of consumers under Bangladeshi law.",
        },
        {
          title: "Consumer Rights and Responsibilities",
          content:
            "This section examines the specific rights granted to consumers under Bangladeshi law, including the right to safety, the right to information, the right to choice, and the right to redress. It also discusses the responsibilities of consumers.",
        },
        {
          title: "Unfair Trade Practices and Consumer Fraud",
          content:
            "The law prohibits various unfair trade practices and fraudulent activities that harm consumers. This section covers these prohibited practices and the legal consequences for businesses engaging in them.",
        },
        {
          title: "Product Liability and Safety Standards",
          content:
            "This section examines the legal framework for product liability in Bangladesh, including safety standards for various products and the liability of manufacturers, distributors, and retailers for defective products.",
        },
        {
          title: "Consumer Dispute Resolution Mechanisms",
          content:
            "The Consumer Rights Protection Act provides for specific dispute resolution mechanisms for consumer complaints. This section covers these mechanisms, including the role of the Directorate of National Consumer Rights Protection and consumer courts.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Consumer Rights Protection Act, 2009",
          link: "https://www.law.gov.bd/acts/consumer-rights-protection-act-2009.pdf",
        },
        {
          type: "document",
          name: "Food Safety Act, 2013",
          link: "https://www.law.gov.bd/acts/food-safety-act-2013.pdf",
        },
        {
          type: "document",
          name: "Competition Act, 2012",
          link: "https://www.law.gov.bd/acts/competition-act-2012.pdf",
        },
      ],
    },
    {
      id: "legal-drafting",
      title: "Legal Drafting: Contracts and Agreements",
      sections: [
        {
          title: "Principles of Legal Drafting",
          content:
            "This section covers the fundamental principles of legal drafting, including clarity, precision, consistency, and organization. It emphasizes the importance of understanding the legal and factual context before beginning the drafting process.",
        },
        {
          title: "Drafting Contracts",
          content:
            "This section focuses on the structure and key components of contracts, including parties, recitals, operative provisions, representations and warranties, covenants, and boilerplate clauses. It also covers techniques for drafting clear and enforceable contractual terms.",
        },
        {
          title: "Specific Types of Agreements",
          content:
            "This part examines the drafting of specific types of agreements common in Bangladeshi legal practice, such as lease agreements, employment contracts, and partnership agreements. It highlights the unique considerations for each type of agreement.",
        },
        {
          title: "Legal Language and Terminology",
          content:
            "This section discusses the appropriate use of legal language and terminology in drafting. It covers common pitfalls in legal writing and techniques for avoiding ambiguity and potential misinterpretation.",
        },
        {
          title: "Review and Revision of Legal Documents",
          content:
            "The final section covers techniques for reviewing and revising legal documents. It includes checklists for ensuring completeness and consistency, as well as strategies for collaborative editing and version control.",
        },
      ],
      resources: [
        { type: "document", name: "Contract Act, 1872", link: "https://www.law.gov.bd/acts/contract-act-1872.pdf" },
        {
          type: "document",
          name: "Registration Act, 1908",
          link: "https://www.law.gov.bd/acts/registration-act-1908.pdf",
        },
        {
          type: "document",
          name: "Specific Relief Act, 1877",
          link: "https://www.law.gov.bd/acts/specific-relief-act-1877.pdf",
        },
      ],
    },
    {
      id: "legal-research",
      title: "Legal Research and Citation",
      sections: [
        {
          title: "Introduction to Legal Research",
          content:
            "This section introduces the fundamentals of legal research, including the hierarchy of legal authorities, the difference between primary and secondary sources, and the research process in the Bangladeshi legal context.",
        },
        {
          title: "Online Legal Research Tools",
          content:
            "This part covers the use of online legal research tools and databases relevant to Bangladeshi law. It includes techniques for effective online searching and evaluating the reliability of online sources.",
        },
        {
          title: "Researching Case Law",
          content:
            "This section focuses on techniques for finding and analyzing relevant case law. It covers the use of law reports, understanding case citations, and the principle of stare decisis in the Bangladeshi legal system.",
        },
        {
          title: "Statutory Research",
          content:
            "This part covers methods for researching and interpreting statutes and statutory instruments. It includes techniques for tracking legislative history and understanding the relationship between different pieces of legislation.",
        },
        {
          title: "Legal Citation in Bangladesh",
          content:
            "The final section covers the principles and practices of legal citation in Bangladesh. It includes guidance on citing cases, statutes, secondary sources, and international materials in accordance with Bangladeshi legal writing conventions.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Supreme Court of Bangladesh Citation Guidelines",
          link: "https://www.supremecourt.gov.bd/web/documents/citation_guidelines.pdf",
        },
        { type: "document", name: "Bangladesh Code", link: "http://bdlaws.minlaw.gov.bd/" },
        {
          type: "document",
          name: "Digital Library of Bangladesh Laws",
          link: "http://www.lawcommissionbangladesh.org/digital-library.html",
        },
      ],
    },
    {
      id: "legal-correspondence",
      title: "Professional Legal Correspondence",
      sections: [
        {
          title: "Principles of Professional Legal Writing",
          content:
            "This section covers the fundamental principles of professional legal writing, including clarity, conciseness, and courtesy. It emphasizes the importance of tailoring communication to the intended audience.",
        },
        {
          title: "Drafting Legal Letters",
          content:
            "This part focuses on the structure and content of various types of legal letters, including demand letters, opinion letters, and client communication letters. It covers techniques for presenting legal information effectively in letter format.",
        },
        {
          title: "Email Communication in Legal Practice",
          content:
            "This section addresses the increasing importance of email in legal practice. It covers best practices for professional email communication, including issues of confidentiality and security.",
        },
        {
          title: "Drafting Legal Memoranda",
          content:
            "This part covers the structure and content of internal legal memoranda. It includes techniques for summarizing facts, analyzing legal issues, and presenting conclusions and recommendations.",
        },
        {
          title: "Ethical Considerations in Legal Correspondence",
          content:
            "The final section addresses ethical considerations in legal correspondence, including maintaining client confidentiality, avoiding conflicts of interest, and ensuring truthfulness in communications.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Bangladesh Bar Council Ethics Guidelines",
          link: "https://www.bangladeshbarcouncil.org/ethics-guidelines.pdf",
        },
        {
          type: "document",
          name: "Information and Communication Technology Act, 2006",
          link: "https://www.law.gov.bd/acts/ict-act-2006.pdf",
        },
        {
          type: "document",
          name: "Digital Security Act, 2018",
          link: "https://www.law.gov.bd/acts/digital-security-act-2018.pdf",
        },
      ],
    },
    {
      id: "legal-analysis",
      title: "Legal Analysis and Writing",
      sections: [
        {
          title: "Fundamentals of Legal Analysis",
          content:
            "This section introduces the core skills of legal analysis, including issue spotting, rule identification, fact application, and conclusion drawing. It emphasizes the importance of logical reasoning and critical thinking in legal analysis.",
        },
        {
          title: "IRAC Method",
          content:
            "This part focuses on the IRAC (Issue, Rule, Analysis, Conclusion) method of legal analysis and writing. It provides techniques for effectively using this structure in various legal documents.",
        },
        {
          title: "Legal Reasoning and Argumentation",
          content:
            "This section covers techniques for constructing persuasive legal arguments. It includes discussion of different types of legal reasoning, including rule-based reasoning, analogical reasoning, and policy-based reasoning.",
        },
        {
          title: "Writing for Different Legal Audiences",
          content:
            "This part addresses how to adapt legal writing for different audiences, including judges, clients, and opposing counsel. It covers techniques for explaining complex legal concepts to non-lawyers.",
        },
        {
          title: "Editing and Revising Legal Documents",
          content:
            "The final section covers techniques for editing and revising legal documents. It includes strategies for improving clarity, conciseness, and persuasiveness in legal writing.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Constitution of Bangladesh",
          link: "https://www.law.gov.bd/acts/constitution-of-bangladesh.pdf",
        },
        {
          type: "document",
          name: "Interpretation of Statutes Act, 1897",
          link: "https://www.law.gov.bd/acts/interpretation-of-statutes-act-1897.pdf",
        },
        {
          type: "document",
          name: "Supreme Court Practice Directions",
          link: "https://www.supremecourt.gov.bd/web/documents/practice_directions.pdf",
        },
      ],
    },
    {
      id: "advocacy-writing",
      title: "Advocacy Writing for Court",
      sections: [
        {
          title: "Introduction to Legal Advocacy Writing",
          content:
            "This section introduces the principles of effective advocacy writing, emphasizing the importance of clear, concise, and persuasive communication in legal documents submitted to courts.",
        },
        {
          title: "Drafting Plaints and Written Statements",
          content:
            "This part covers the structure and content of plaints and written statements in civil cases. It includes techniques for presenting facts, framing issues, and articulating legal arguments effectively.",
        },
        {
          title: "Writing Petitions and Applications",
          content:
            "This section focuses on drafting various types of petitions and applications, including bail applications, injunction applications, and revision petitions. It covers the specific requirements and best practices for each type of document.",
        },
        {
          title: "Appellate Brief Writing",
          content:
            "This part addresses the skills needed for effective appellate brief writing. It covers the structure of appellate briefs, techniques for framing issues on appeal, and strategies for presenting persuasive arguments to appellate courts.",
        },
        {
          title: "Ethics in Advocacy Writing",
          content:
            "The final section covers ethical considerations in advocacy writing, including the duty of candor to the court, avoiding misrepresentation of facts or law, and maintaining professionalism in written submissions.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Civil Procedure Code, 1908",
          link: "https://www.law.gov.bd/acts/civil-procedure-code-1908.pdf",
        },
        {
          type: "document",
          name: "Criminal Procedure Code, 1898",
          link: "https://www.law.gov.bd/acts/code-of-criminal-procedure-1898.pdf",
        },
        {
          type: "document",
          name: "Supreme Court of Bangladesh Practice Directions",
          link: "https://www.supremecourt.gov.bd/web/documents/practice_directions.pdf",
        },
      ],
    },
    {
      id: "public-international-law",
      title: "Public International Law",
      sections: [
        {
          title: "Introduction to Public International Law",
          content:
            "This section provides an overview of public international law, its sources, and its role in the global legal system. It covers the fundamental principles of international law and how they apply to states and international organizations.",
        },
        {
          title: "Sources of International Law",
          content:
            "This part examines the sources of international law as outlined in Article 38 of the Statute of the International Court of Justice, including treaties, customary international law, and general principles of law.",
        },
        {
          title: "State Responsibility and Diplomatic Protection",
          content:
            "This section covers the principles of state responsibility for internationally wrongful acts and the concept of diplomatic protection in international law.",
        },
        {
          title: "International Organizations and the United Nations",
          content:
            "This part focuses on the role of international organizations in the international legal system, with a particular emphasis on the United Nations and its organs.",
        },
        {
          title: "Peaceful Settlement of International Disputes",
          content:
            "The final section examines various methods for the peaceful settlement of international disputes, including negotiation, mediation, arbitration, and adjudication by international courts and tribunals.",
        },
      ],
      resources: [
        { type: "document", name: "UN Charter", link: "https://www.un.org/en/about-us/un-charter" },
        {
          type: "document",
          name: "Vienna Convention on the Law of Treaties",
          link: "https://legal.un.org/ilc/texts/instruments/english/conventions/1_1_1969.pdf",
        },
        {
          type: "document",
          name: "UN Convention on the Law of the Sea",
          link: "https://www.un.org/depts/los/convention_agreements/texts/unclos/unclos_e.pdf",
        },
      ],
    },
    {
      id: "international-trade-law",
      title: "International Trade Law",
      sections: [
        {
          title: "Fundamentals of International Trade Law",
          content:
            "This section introduces the basic concepts and principles of international trade law, including the historical development of the global trading system and the role of the World Trade Organization (WTO).",
        },
        {
          title: "The World Trade Organization and Its Agreements",
          content:
            "This part examines the structure and functions of the WTO, as well as key agreements such as the General Agreement on Tariffs and Trade (GATT), the General Agreement on Trade in Services (GATS), and the Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS).",
        },
        {
          title: "Regional Trade Agreements and Free Trade Areas",
          content:
            "This section explores regional trade agreements and free trade areas, their relationship with the WTO system, and their impact on global trade.",
        },
        {
          title: "Trade Remedies and Dispute Settlement",
          content:
            "This part covers trade remedies such as anti-dumping measures, countervailing duties, and safeguards, as well as the WTO dispute settlement mechanism.",
        },
        {
          title: "Emerging Issues in International Trade Law",
          content:
            "The final section addresses contemporary challenges in international trade law, including digital trade, environmental concerns, and the impact of global health crises on international trade.",
        },
      ],
      resources: [
        { type: "document", name: "WTO Agreement", link: "https://www.wto.org/english/docs_e/legal_e/04-wto_e.htm" },
        { type: "document", name: "GATT 1994", link: "https://www.wto.org/english/docs_e/legal_e/06-gatt_e.htm" },
        {
          type: "document",
          name: "TRIPS Agreement",
          link: "https://www.wto.org/english/docs_e/legal_e/27-trips_01_e.htm",
        },
        { type: "document", name: "SAFTA Agreement", link: "https://www.sawtee.org/publications/SAFTA_Agreement.pdf" },
      ],
    },
    {
      id: "human-rights-law",
      title: "International Human Rights Law",
      sections: [
        {
          title: "Introduction to International Human Rights Law",
          content:
            "This section provides an overview of international human rights law, its historical development, and the philosophical foundations of human rights.",
        },
        {
          title: "International Bill of Human Rights",
          content:
            "This part examines the core international human rights instruments, including the Universal Declaration of Human Rights, the International Covenant on Civil and Political Rights, and the International Covenant on Economic, Social and Cultural Rights.",
        },
        {
          title: "Regional Human Rights Systems",
          content:
            "This section explores regional human rights systems, including the European, Inter-American, and African systems, and their relationship with the UN human rights framework.",
        },
        {
          title: "Implementation and Enforcement of Human Rights",
          content:
            "This part covers the mechanisms for implementing and enforcing human rights at the international and national levels, including the role of UN treaty bodies and special procedures.",
        },
        {
          title: "Contemporary Challenges in Human Rights Law",
          content:
            "The final section addresses current issues in human rights law, such as the impact of terrorism and counter-terrorism measures on human rights, the human rights implications of climate change, and the challenges posed by new technologies.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "Universal Declaration of Human Rights",
          link: "https://www.un.org/en/about-us/universal-declaration-of-human-rights",
        },
        {
          type: "document",
          name: "International Covenant on Civil and Political Rights",
          link: "https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights",
        },
        {
          type: "document",
          name: "International Covenant on Economic, Social and Cultural Rights",
          link: "https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-economic-social-and-cultural-rights",
        },
        {
          type: "document",
          name: "Bangladesh National Human Rights Commission Act, 2009",
          link: "https://www.law.gov.bd/acts/bangladesh-national-human-rights-commission-act-2009.pdf",
        },
      ],
    },
    {
      id: "international-arbitration",
      title: "International Arbitration",
      sections: [
        {
          title: "Fundamentals of International Arbitration",
          content:
            "This section introduces the concept of international arbitration, its advantages over litigation, and the legal framework supporting international arbitration.",
        },
        {
          title: "International Arbitration Agreements",
          content:
            "This part examines the key elements of international arbitration agreements, including their formation, validity, and scope.",
        },
        {
          title: "Arbitral Proceedings and Tribunal",
          content:
            "This section covers the conduct of arbitral proceedings, the composition and powers of arbitral tribunals, and the principles of due process in international arbitration.",
        },
        {
          title: "Recognition and Enforcement of Arbitral Awards",
          content:
            "This part explores the recognition and enforcement of foreign arbitral awards under the New York Convention and national laws.",
        },
        {
          title: "Investment Treaty Arbitration",
          content:
            "The final section addresses investor-state dispute settlement mechanisms, including arbitration under bilateral investment treaties and multilateral investment agreements.",
        },
      ],
      resources: [
        {
          type: "document",
          name: "New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards",
          link: "https://www.newyorkconvention.org/english",
        },
        {
          type: "document",
          name: "UNCITRAL Model Law on International Commercial Arbitration",
          link: "https://uncitral.un.org/sites/uncitral.un.org/files/media-documents/uncitral/en/19-09955_e_ebook.pdf",
        },
        {
          type: "document",
          name: "Arbitration Act 2001 of Bangladesh",
          link: "https://www.law.gov.bd/acts/arbitration-act-2001.pdf",
        },
      ],
    },
    {
      id: "immigration-law",
      title: "Immigration and Refugee Law",
      sections: [
        {
          title: "Introduction to Immigration and Refugee Law",
          content:
            "This section provides an overview of international immigration and refugee law, including key concepts and principles.",
        },
        {
          title: "International Refugee Protection Framework",
          content:
            "This part examines the 1951 Refugee Convention and its 1967 Protocol, as well as the principle of non-refoulement and other core protections for refugees.",
        },
        {
          title: "Regional Approaches to Refugee Protection",
          content:
            "This section explores regional refugee protection frameworks, with a focus on the South Asian context and Bangladesh's approach to refugee issues.",
        },
        {
          title: "Immigration Law and Policy",
          content:
            "This part covers national immigration laws and policies, including visa regulations, work permits, and citizenship laws, with a focus on Bangladesh's legal framework.",
        },
        {
          title: "Contemporary Challenges in Immigration and Refugee Law",
          content:
            "The final section addresses current issues in immigration and refugee law, such as the impact of climate change on migration, the challenges of mixed migration flows, and the protection of internally displaced persons.",
        },
      ],
      resources: [
        { type: "document", name: "1951 Refugee Convention", link: "https://www.unhcr.org/3b66c2aa10" },
        {
          type: "document",
          name: "1967 Protocol Relating to the Status of Refugees",
          link: "https://www.unhcr.org/3b66c2aa10",
        },
        {
          type: "document",
          name: "Bangladesh Citizenship Act, 1951",
          link: "https://www.law.gov.bd/acts/bangladesh-citizenship-act-1951.pdf",
        },
        {
          type: "document",
          name: "Prevention and Suppression of Human Trafficking Act, 2012",
          link: "https://www.law.gov.bd/acts/prevention-and-suppression-of-human-trafficking-act-2012.pdf",
        },
      ],
    },
  ]

  return courses.find((course) => course.id === courseId)
}
export default function CourseDetailsPage({ params }: { params: Promise<{ courseId: string }> }) {
  const [expandedSection, setExpandedSection] = useState<number | null>(null)
  const [courseDetails, setCourseDetails] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [courseId, setCourseId] = useState<string | null> (null)

  useEffect(() => {
    params.then((resolvedParams) => {
      const details = getCourseDetails(resolvedParams.courseId)
      setCourseId(resolvedParams.courseId)
      if (details) {
        setCourseDetails(details)
      } else {
        setError("Course not found")
      }
    })
  }, [params])

  if (error) {
    return <div className="text-center mt-8 text-red-600">{error}</div>
  }

  if (!courseDetails) {
    return <div className="text-center mt-8">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Layout children={<div></div>} />
      <main className="container max-w-4xl mx-auto py-12 px-4">
        <BackButton />
        <h1 className="text-3xl font-bold mb-6">{courseDetails.title}</h1>
        <div className="space-y-6">
          {courseDetails.sections.map((section: any, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                >
                  {section.title}
                  <motion.div animate={{ rotate: expandedSection === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </CardTitle>
              </CardHeader>
              <AnimatePresence initial={false}>
                {expandedSection === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent>
                      <p>{section.content}</p>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {courseDetails.resources.map((resource: any, index: number) => (
                <li key={index}>
                  <Link href={resource.link} className="flex items-center text-blue-600 hover:underline">
                    <FileText className="h-4 w-4 mr-2" />
                    {resource.name}
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <div className="mt-8 text-center">
          <Link href={`/courses/${courseId}/enroll`}>
            <Button size="lg">
              <BookOpen className="mr-2 h-5 w-5" /> Enroll in This Course
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}