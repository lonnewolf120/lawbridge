
import { BackButton } from "@/components/back-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText } from "lucide-react"

function getCourseDetails(courseId: string) {
  const allCourses = [
    {
      id: "marriage-laws",
      title: "Marriage Laws and Procedures in Bangladesh",
      content: `Marriage laws in Bangladesh are a complex interplay of religious personal laws and civil regulations. The country recognizes marriages under various religious laws, including Muslim, Hindu, and Christian laws, as well as civil marriages under the Special Marriage Act of 1872. For Muslim marriages, the Muslim Family Laws Ordinance 1961 governs the registration and dissolution of marriages. It mandates the registration of all Muslim marriages with the local Union Council and sets the minimum age for marriage at 18 for women and 21 for men. The law also regulates polygamy, requiring written permission from the first wife before a man can enter into a second marriage. Hindu marriages in Bangladesh are governed by Hindu personal laws, which do not require formal registration. However, the Hindu Marriage Registration Act 2012 provides for optional registration of Hindu marriages. Christian marriages are regulated by the Christian Marriage Act 1872, which requires marriages to be solemnized by a licensed minister of religion and registered with the Registrar of Christian Marriages. The Special Marriage Act of 1872 provides for civil marriages, allowing individuals of different faiths or no faith to marry under civil law. This act is particularly important for interfaith couples or those who wish to have a non-religious marriage ceremony.`,
      resources: [
        { type: "document", name: "Muslim Family Laws Ordinance 1961" },
        { type: "document", name: "Hindu Marriage Registration Act 2012" },
        { type: "document", name: "Christian Marriage Act 1872" },
        { type: "document", name: "Special Marriage Act 1872" },
      ],
    },
    {
      id: "divorce-laws",
      title: "Divorce Laws: Rights and Processes",
      content: `Divorce laws in Bangladesh are primarily governed by the personal laws of different religious communities, with some overarching civil laws applicable in specific cases. The process and grounds for divorce vary significantly depending on whether the marriage was conducted under Muslim, Hindu, Christian, or civil law. For Muslim marriages, divorce can be initiated by either spouse. The most common form of divorce is 'talaq', which can be pronounced by the husband. However, the Muslim Family Laws Ordinance 1961 requires that notice of talaq be given to the Chairman of the Union Council, followed by a 90-day reconciliation period. Women can seek divorce through 'khula' (mutual consent) or 'tafwid' (delegated right of divorce). The Family Courts Ordinance 1985 provides the legal framework for filing and processing divorce cases. Hindu personal law in Bangladesh traditionally does not recognize divorce. However, the Hindu Marriage Registration Act 2012 now provides for divorce in certain circumstances, such as cruelty, desertion, or conversion to another religion. Christian divorces are governed by the Divorce Act 1869, which allows for divorce on grounds such as adultery, cruelty, or desertion. For civil marriages conducted under the Special Marriage Act 1872, divorces are governed by the same act, which provides for divorce on grounds similar to those in Christian law. Regardless of the applicable personal law, issues such as child custody, alimony, and property division are often contentious in divorce proceedings.`,
      resources: [
        { type: "document", name: "Muslim Family Laws Ordinance 1961" },
        { type: "document", name: "Family Courts Ordinance 1985" },
        { type: "document", name: "Hindu Marriage Registration Act 2012" },
        { type: "document", name: "Divorce Act 1869" },
      ],
    },
    {
      id: "inheritance-laws",
      title: "Understanding Inheritance Laws",
      content: `Inheritance laws in Bangladesh are a complex system influenced by religious personal laws, customary practices, and statutory regulations. The application of inheritance laws varies significantly depending on the religion of the deceased, creating a diverse legal landscape. For Muslims, who constitute the majority of Bangladesh's population, inheritance is primarily governed by Islamic law (Sharia). The Muslim Personal Law (Shariat) Application Act 1937 ensures that Muslim personal law applies to inheritance matters for Muslims. Under Islamic law, inheritance shares are predetermined based on the relationship to the deceased. Male heirs generally receive larger shares than female heirs in the same degree of relationship. The principle of 'per capita distribution' is followed, where children of predeceased heirs do not inherit in place of their parents. Hindu inheritance law in Bangladesh is based on ancient Hindu legal texts and customs. The Hindu Inheritance (Removal of Disabilities) Act 1928 and the Hindu Women's Rights to Property Act 1937 have brought some reforms, particularly in improving women's inheritance rights. However, significant gender disparities remain. Unlike Muslim law, Hindu law recognizes the concept of coparcenary property in joint family systems. Christian inheritance in Bangladesh is governed by the Succession Act 1925, which provides for equal distribution among heirs regardless of gender. This act also applies to Parsis and to those married under the Special Marriage Act 1872.`,
      resources: [
        { type: "document", name: "Muslim Personal Law (Shariat) Application Act 1937" },
        { type: "document", name: "Hindu Inheritance (Removal of Disabilities) Act 1928" },
        { type: "document", name: "Hindu Women's Rights to Property Act 1937" },
        { type: "document", name: "Succession Act 1925" },
      ],
    },
    {
      id: "child-custody",
      title: "Child Custody and Guardianship",
      content: `Child custody and guardianship laws in Bangladesh are primarily governed by personal laws based on religion, with some overarching civil laws applicable in specific cases. The legal framework aims to protect the best interests of the child, but the application can vary based on the religious background of the family. For Muslim families, child custody is governed by Islamic law principles as interpreted in Bangladesh. The concept of 'hizanat' (custody) gives preference to the mother for custody of young children, typically until boys reach seven years and girls reach puberty. After this age, custody generally transfers to the father. However, courts have the discretion to extend the mother's custody if it serves the child's best interests. The Guardian and Wards Act 1890 is also applicable, allowing courts to appoint guardians for minors. In Hindu law, which applies to Hindu families in Bangladesh, there is no specific provision for child custody. The father is considered the natural guardian of the child. However, courts often consider the welfare of the child as paramount in custody decisions, which may result in custody being granted to the mother if it's in the child's best interest. For Christian families, custody matters are generally decided based on the principle of the best interests of the child, as interpreted by the courts. The Divorce Act 1869, which applies to Christians, allows courts to make orders regarding custody of children in divorce proceedings.`,
      resources: [
        { type: "document", name: "Guardian and Wards Act 1890" },
        { type: "document", name: "Divorce Act 1869" },
        { type: "document", name: "Family Courts Ordinance 1985" },
      ],
    },
    {
      id: "domestic-violence",
      title: "Domestic Violence Laws and Remedies",
      content: `Domestic violence is a significant issue in Bangladesh, and the legal framework to address it has evolved significantly in recent years. The primary legislation dealing with domestic violence is the Domestic Violence (Prevention and Protection) Act 2010, which marked a crucial step in recognizing and combating domestic violence as a specific legal issue. The Domestic Violence Act 2010 provides a broad definition of domestic violence, encompassing physical, psychological, sexual, and economic abuse. It extends protection not only to wives but also to women in other domestic relationships, including mothers, sisters, and daughters. The Act allows victims to seek protection orders, residence orders, and compensation orders from the court. Under this Act, victims can file complaints with the police, enforcement officers, or directly with the court. The law empowers courts to issue protection orders, which can include prohibiting the perpetrator from committing further acts of violence, entering the victim's workplace or children's school, or contacting the victim. The Act also provides for the appointment of enforcement officers to assist victims in accessing legal and medical services. It mandates the creation of shelter homes for victims and emphasizes the importance of counseling for both victims and perpetrators. In addition to the Domestic Violence Act, other laws also play a role in addressing domestic violence. The Penal Code 1860 criminalizes various forms of physical and sexual violence that can occur in domestic settings. The Nari-o-Shishu Nirjatan Daman Ain 2000 (Women and Children Repression Prevention Act) provides severe punishments for crimes against women and children, including domestic violence.`,
      resources: [
        { type: "document", name: "Domestic Violence (Prevention and Protection) Act 2010" },
        { type: "document", name: "Penal Code 1860 (Relevant Sections)" },
        { type: "document", name: "Women and Children Repression Prevention Act 2000" },
      ],
    },
    // Business Law Courses
    {
      id: "contract-law",
      title: "Contract Law and Negotiation",
      content: `Contract law in Bangladesh is primarily governed by the Contract Act 1872, a legislation inherited from the British colonial era. This Act, along with subsequent amendments and judicial interpretations, forms the backbone of contractual relationships in the country's legal and business environment. The Contract Act 1872 defines a contract as an agreement enforceable by law. It lays out the essential elements of a valid contract: offer, acceptance, consideration, capacity to contract, free consent, and lawful object. The Act also covers aspects such as void agreements, contingent contracts, and the performance of contracts. One of the key principles in Bangladeshi contract law is the freedom of contract, allowing parties to enter into agreements on their own terms, provided they do not contravene any law. However, this principle is subject to various statutory and judicial limitations to protect weaker parties and public interest. The concept of 'privity of contract' is recognized in Bangladesh, meaning that only parties to a contract can enforce its terms. However, exceptions have been developed through case law and specific legislation. Breach of contract is a significant area of contract law. The Act provides remedies for breach, including damages, specific performance, and injunction. The quantification of damages follows the principle of putting the aggrieved party in the same position as if the contract had been performed. In recent years, electronic contracts have gained legal recognition in Bangladesh. The Information and Communication Technology Act 2006 provides legal validity to electronic records and digital signatures, facilitating e-commerce and online transactions.`,
      resources: [
        { type: "document", name: "Contract Act 1872" },
        { type: "document", name: "Information and Communication Technology Act 2006" },
      ],
    },
    {
      id: "company-law",
      title: "Company Law and Corporate Governance",
      content: `Company law in Bangladesh is primarily governed by the Companies Act 1994, which provides the legal framework for the formation, operation, and dissolution of companies. This Act, along with various amendments and regulations, forms the backbone of corporate governance in the country. The Companies Act 1994 recognizes different types of companies, including private limited companies, public limited companies, and companies limited by guarantee. Each type has specific requirements for formation, management, and compliance. Corporate governance in Bangladesh has evolved significantly in recent years, with the Bangladesh Securities and Exchange Commission (BSEC) playing a crucial role in setting standards for listed companies. The Corporate Governance Code 2018, issued by BSEC, provides a comprehensive framework for ensuring transparency, accountability, and protection of shareholders' rights. Key aspects of company law and corporate governance in Bangladesh include company formation, which involves registration with the Registrar of Joint Stock Companies and Firms (RJSC), requiring submission of memorandum and articles of association, along with other necessary documents. The law mandates the appointment of directors and defines their roles and responsibilities. For listed companies, there are specific requirements for independent directors. The Companies Act provides for various rights of shareholders, including the right to attend general meetings, vote on resolutions, and receive dividends. Companies are required to maintain proper books of accounts and prepare financial statements in accordance with International Financial Reporting Standards (IFRS). The law mandates annual audits by qualified chartered accountants and provides for the appointment and removal of auditors.`,
      resources: [
        { type: "document", name: "Companies Act 1994" },
        { type: "document", name: "Corporate Governance Code 2018" },
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      content: `Intellectual Property (IP) rights in Bangladesh are governed by a combination of national laws and international treaties. The country has made significant strides in recent years to strengthen its IP regime, recognizing the importance of IP protection for economic development and innovation. The primary laws governing IP in Bangladesh include the Patents and Designs Act, 1911 (amended in 2003), the Trademarks Act, 2009, and the Copyright Act, 2000 (amended in 2005). Bangladesh is also a member of the World Intellectual Property Organization (WIPO) and a signatory to the Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS). Patents in Bangladesh are governed by the Patents and Designs Act, 1911. The patent term is 16 years from the date of filing. The country follows a 'first to file' system. However, the patent examination process can be slow, and there's a need for modernization of the patent office. Trademark protection in Bangladesh is robust under the Trademarks Act, 2009. The registration process involves filing an application with the Department of Patents, Designs and Trademarks. The initial registration period is seven years, renewable for ten-year periods thereafter. Copyright protection is automatic in Bangladesh under the Copyright Act, 2000. The law covers literary, dramatic, musical, and artistic works, as well as computer programs. The copyright term generally extends to 60 years after the author's death. Despite these legal frameworks, enforcement of IP rights remains a challenge in Bangladesh. Counterfeit goods and piracy are prevalent issues. The government has been working to improve enforcement mechanisms and raise awareness about IP rights.`,
      resources: [
        { type: "document", name: "Patents and Designs Act, 1911" },
        { type: "document", name: "Trademarks Act, 2009" },
        { type: "document", name: "Copyright Act, 2000" },
      ],
    },
    {
      id: "labor-law",
      title: "Labor Law and Employee Rights",
      content: `Labor law in Bangladesh is primarily governed by the Bangladesh Labour Act, 2006 (amended in 2013, 2015, and 2018). This comprehensive legislation covers a wide range of issues related to employment, working conditions, and industrial relations. Key aspects of labor law in Bangladesh include employment contracts, working hours, minimum wage, leave and holidays, occupational safety and health, child labor regulations, trade union rights, termination of employment, maternity benefits, and social security provisions. The standard workweek in Bangladesh is 48 hours, with a maximum of 60 hours including overtime. Workers are entitled to one day off per week. Bangladesh has a national minimum wage system, which varies by sector. The garment industry, a major employer, has its own minimum wage structure. Workers are entitled to various types of leave, including annual leave, sick leave, and festival holidays. The law mandates safety measures and health protections for workers. This has been a focus area following industrial accidents like the Rana Plaza collapse in 2013. The minimum working age is 14, with restrictions on the type of work that can be performed by those under 18. Workers have the right to form and join trade unions, although there are some restrictions, particularly in export processing zones. The law provides guidelines for termination procedures and severance payments. Female workers are entitled to 16 weeks of paid maternity leave. The law also provides for various forms of social security, including provident funds and gratuity payments. Despite these legal protections, enforcement of labor laws remains a challenge in Bangladesh. Issues such as unsafe working conditions, low wages, and restrictions on union activities continue to be concerns, particularly in the informal sector.`,
      resources: [
        { type: "document", name: "Bangladesh Labour Act, 2006" },
        { type: "document", name: "Bangladesh Labour Rules, 2015" },
      ],
    },
    {
      id: "tax-law",
      title: "Taxation Law for Businesses",
      content: `The taxation system in Bangladesh is governed by a complex set of laws and regulations, primarily centered around the Income Tax Ordinance, 1984 and the Value Added Tax (VAT) and Supplementary Duty Act, 2012. The National Board of Revenue (NBR) is the central authority for tax administration in the country. Key aspects of Bangladesh's taxation law include income tax, corporate tax, Value Added Tax (VAT), customs duty, and excise duty. The Income Tax Ordinance, 1984 (with subsequent amendments) provides the legal basis for income taxation. Tax rates vary for individuals, companies, and other entities. Bangladesh follows a progressive tax system for individuals, with rates ranging from 0% to 25% (as of 2021). Corporate tax rates differ based on the nature and sector of the company. For example, publicly traded companies generally have a lower tax rate compared to non-publicly traded companies. Certain sectors like mobile phone operators and cigarette manufacturers have higher tax rates. VAT, introduced in 1991, is a major source of revenue for the government. The VAT and Supplementary Duty Act, 2012 (implemented from 2019) modernized the VAT system. The standard VAT rate is 15%, with reduced rates for certain goods and services. Customs duty, governed by the Customs Act, 1969, is levied on imported goods. Rates vary depending on the type of goods and applicable trade agreements. Excise duty is levied on the production of certain goods within the country, as per the Excise and Salt Act, 1944. Bangladesh offers various tax incentives to promote investment, particularly in sectors like export-oriented industries, power generation, and hi-tech parks. The country has also signed agreements with numerous countries to avoid double taxation, which is particularly relevant for foreign investors.`,
      resources: [
        { type: "document", name: "Income Tax Ordinance, 1984" },
        { type: "document", name: "Value Added Tax (VAT) and Supplementary Duty Act, 2012" },
        { type: "document", name: "Customs Act, 1969" },
      ],
    },
    // Criminal Law Courses
    {
      id: "criminal-procedure",
      title: "Criminal Procedure in Bangladesh",
      content: `The criminal procedure in Bangladesh is primarily governed by the Code of Criminal Procedure, 1898 (CrPC), which provides a comprehensive framework for the conduct of criminal trials. This colonial-era law, with subsequent amendments, continues to be the backbone of criminal proceedings in the country. The CrPC outlines procedures for investigation, arrest, bail, trial, and appeal in criminal cases. It defines the powers and responsibilities of law enforcement agencies, courts, and other stakeholders in the criminal justice system. Key aspects of criminal procedure include the process of filing a First Information Report (FIR), rules for arrest and detention, provisions for bail, the conduct of trials, and the appeals process. The law also provides safeguards for accused persons, including the right to legal representation and protection against self-incrimination. Recent amendments have aimed to modernize the criminal justice system, including provisions for speedy trials and the use of technology in court proceedings. The CrPC is complemented by other laws such as the Evidence Act, 1872, which governs the admissibility of evidence in criminal trials. The criminal justice system in Bangladesh follows an adversarial model, where the prosecution and defense present their cases before a neutral judge. The burden of proof in criminal cases lies with the prosecution, who must prove the guilt of the accused beyond reasonable doubt. Understanding the intricacies of criminal procedure is crucial for lawyers, law enforcement officers, and anyone involved in the criminal justice system in Bangladesh.`,
      resources: [
        { type: "document", name: "Code of Criminal Procedure, 1898" },
        { type: "document", name: "Evidence Act, 1872" },
      ],
    },
    {
      id: "penal-code",
      title: "Bangladesh Penal Code: In-depth Analysis",
      content: `The Bangladesh Penal Code, originally enacted in 1860 during the British colonial era, remains the primary criminal code of Bangladesh. This comprehensive legislation defines various criminal offenses and prescribes punishments for them. Despite its colonial origins, the Penal Code has undergone several amendments to adapt to the changing social and legal landscape of Bangladesh. The Code categorizes offenses into various types, including offenses against the state, offenses against public tranquility, offenses relating to religion, offenses against the human body, and offenses against property. It provides definitions and explanations of terms used throughout the Code, ensuring consistent interpretation. The Code prescribes various forms of punishment, including death penalty, imprisonment, and fines. It also provides for alternative punishments in certain cases. The Penal Code criminalizes not only the commission of offenses but also attempts to commit offenses and abetment of offenses. It outlines various general exceptions and defenses, such as mistake of fact, accident, infancy, insanity, and consent. Recent amendments to the Penal Code have addressed contemporary issues such as cybercrime, terrorism, and human trafficking. For instance, the Information and Communication Technology Act, 2006 (amended in 2013) introduced new offenses related to digital crimes. The Anti-Terrorism Act, 2009 (amended in 2012 and 2013) supplements the Penal Code in addressing terrorism-related offenses. Understanding the Bangladesh Penal Code is essential for legal professionals, law enforcement officers, and anyone interested in criminal law in Bangladesh.`,
      resources: [
        { type: "document", name: "Bangladesh Penal Code, 1860" },
        { type: "document", name: "Information and Communication Technology Act, 2006" },
        { type: "document", name: "Anti-Terrorism Act, 2009" },
      ],
    },
    {
      id: "evidence-law",
      title: "Law of Evidence in Criminal Cases",
      content: `The law of evidence in criminal cases in Bangladesh is primarily governed by the Evidence Act, 1872. This Act, inherited from the British colonial era, provides the framework for the admissibility and evaluation of evidence in both civil and criminal proceedings. In criminal cases, the application of evidence law is particularly crucial as it directly impacts the fundamental rights of the accused and the pursuit of justice. The Act defines what evidence is relevant and admissible in court. Sections 5 to 55 deal with the relevancy of facts, including direct and circumstantial evidence. In criminal cases, the burden of proof generally lies with the prosecution to prove the guilt of the accused beyond reasonable doubt. However, in certain cases, the burden may shift to the accused. The Act provides for various presumptions, both rebuttable and irrebuttable, which can play a significant role in criminal trials. Sections 24 to 30 deal with confessions, including their admissibility and the circumstances under which they can be used as evidence. The Act allows for the admission of expert testimony in areas requiring specialized knowledge. The law of evidence in Bangladesh has been influenced by Islamic law principles, particularly in matters relating to family law and personal status. However, in criminal cases, the Evidence Act remains the primary source of law. Recent developments in technology have led to discussions about the admissibility of digital evidence in criminal trials. The Information and Communication Technology Act, 2006 provides some guidance on this issue, but challenges remain in adapting traditional evidence law to the digital age. Understanding the intricacies of evidence law is crucial for lawyers, judges, and law enforcement officers involved in criminal proceedings in Bangladesh.`,
      resources: [
        { type: "document", name: "Evidence Act, 1872" },
        { type: "document", name: "Information and Communication Technology Act, 2006" },
      ],
    },
    {
      id: "cybercrime",
      title: "Cybercrime and Digital Forensics",
      content: `Cybercrime and digital forensics are increasingly important areas of law and law enforcement in Bangladesh, reflecting the country's rapid digitalization and the growing use of information and communication technologies (ICTs). The legal framework for addressing cybercrime in Bangladesh is primarily based on the Information and Communication Technology Act, 2006 (amended in 2013) and the Digital Security Act, 2018. The Digital Security Act, 2018 is the primary legislation dealing with cybercrimes. It replaced some sections of the ICT Act and introduced new provisions to address emerging cyber threats. The law recognizes various forms of cybercrimes, including hacking, identity theft, phishing, cyberstalking, online harassment, and the spread of offensive or false information. The Act prescribes severe penalties for cybercrimes, including fines and imprisonment. Some provisions have been criticized for being overly broad and potentially infringing on freedom of expression. The Act established the Digital Security Agency and empowered law enforcement agencies to investigate cybercrimes. The Criminal Investigation Department (CID) of the Bangladesh Police has a dedicated Cyber Police Centre. Digital forensics plays a crucial role in investigating cybercrimes. This involves the collection, preservation, and analysis of digital evidence. The admissibility of digital evidence in Bangladeshi courts is governed by the Evidence Act, 1872, with some provisions in the ICT Act and Digital Security Act providing additional guidance. Challenges in combating cybercrime in Bangladesh include the need for specialized training for law enforcement and judicial officers, the transnational nature of many cybercrimes, and the rapid evolution of technology. International cooperation is crucial, and Bangladesh has been working to strengthen its ties with international law enforcement agencies to combat cybercrime effectively.`,
      resources: [
        { type: "document", name: "Information and Communication Technology Act, 2006" },
        { type: "document", name: "Digital Security Act, 2018" },
        { type: "document", name: "Evidence Act, 1872" },
      ],
    },
    {
      id: "juvenile-justice",
      title: "Juvenile Justice System",
      content: `The juvenile justice system in Bangladesh is designed to address the unique needs of children in conflict with the law, emphasizing rehabilitation over punishment. The primary legislation governing juvenile justice in Bangladesh is the Children Act, 2013, which replaced the earlier Children Act of 1974. The Children Act, 2013 defines a child as anyone below the age of 18. The minimum age of criminal responsibility is set at 9 years. The Act mandates a separate justice system for children, including specialized Children's Courts and Child Affairs Police Officers. The law encourages diversion of minor offenses away from formal court proceedings, promoting alternative dispute resolution methods. All decisions in the juvenile justice process must prioritize the best interests of the child. Children in conflict with the law have the right to legal representation, often provided by legal aid organizations. The Act emphasizes that detention should be used only as a measure of last resort and for the shortest appropriate period. The focus is on rehabilitating and reintegrating children into society rather than punitive measures. The law protects the privacy of children involved in legal proceedings, prohibiting the publication of their identities. The juvenile justice system in Bangladesh faces several challenges, including limited resources, lack of specialized training for personnel, and inadequate facilities for rehabilitation. There's also a need for better coordination between various stakeholders, including the police, courts, social welfare departments, and NGOs working in child protection. International standards, such as the UN Convention on the Rights of the Child, have influenced the development of juvenile justice in Bangladesh. However, gaps remain between law and practice, and efforts are ongoing to fully implement the principles of child-friendly justice.`,
      resources: [
        { type: "document", name: "Children Act, 2013" },
        { type: "document", name: "UN Convention on the Rights of the Child" },
      ],
    },
    // Civil Law Courses
    {
      id: "property-law",
      title: "Property Law and Land Rights",
      content: `Property law in Bangladesh is a complex area governed by a mix of statutory laws, common law principles, and customary practices. The primary legislation dealing with property rights is the Transfer of Property Act, 1882, which provides the basic framework for property transactions. Land rights in Bangladesh are particularly complex due to historical factors and the country's high population density. The land registration system is governed by the Registration Act, 1908, which requires the registration of most property transactions. However, the registration process can be cumbersome and prone to disputes. The Land Reform Ordinance, 1984 introduced significant changes, including restrictions on land ownership and provisions for the protection of sharecroppers. The State Acquisition and Tenancy Act, 1950 abolished the zamindari system and established a direct relationship between the government and tenants. Dispute resolution in property matters often involves both formal court proceedings and alternative dispute resolution mechanisms. The civil courts have jurisdiction over property disputes, but cases can be lengthy and complex. The Real Estate Development and Management Act, 2010 regulates the real estate sector, providing some protection to property buyers. Recent initiatives, such as the digitization of land records and the introduction of e-mutation systems, aim to streamline property transactions and reduce disputes. However, challenges remain, including the prevalence of benami (proxy) ownership, lack of comprehensive land surveys, and conflicts between statutory and customary land rights, particularly in the Chittagong Hill Tracts region.`,
      resources: [
        { type: "document", name: "Transfer of Property Act, 1882" },
        { type: "document", name: "Registration Act, 1908" },
        { type: "document", name: "Land Reform Ordinance, 1984" },
        { type: "document", name: "State Acquisition and Tenancy Act, 1950" },
      ],
    },
    {
      id: "civil-procedure",
      title: "Civil Procedure Code: A Comprehensive Study",
      content: `The Civil Procedure Code (CPC) of 1908 is the primary legislation governing civil litigation in Bangladesh. It provides a comprehensive framework for the conduct of civil suits, from the filing of a case to its final disposal, including appeals. The CPC outlines the jurisdiction of various civil courts and the procedures they must follow. It covers aspects such as the filing of plaints, service of summons, written statements, framing of issues, trial procedures, execution of decrees, and appeals. The Code provides for various types of suits, including declaratory suits, suits for injunction, and suits for specific performance. It also outlines procedures for summary trials and small cause matters. The CPC includes provisions for alternative dispute resolution mechanisms, such as arbitration and mediation, which are increasingly being used to reduce the burden on the court system. Recent amendments to the CPC have aimed at speeding up the litigation process, including the introduction of time limits for various stages of a suit. The Code also provides for interim orders and injunctions, which play a crucial role in preserving the rights of parties during the pendency of a suit. The concept of res judicata, which prevents the re-litigation of issues already decided by a competent court, is an important principle enshrined in the CPC. The Code also provides for the review and revision of orders and judgments under certain circumstances. Understanding the intricacies of the Civil Procedure Code is essential for lawyers, judges, and litigants involved in civil disputes in Bangladesh.`,
      resources: [
        { type: "document", name: "Civil Procedure Code, 1908" },
        { type: "document", name: "Arbitration Act, 2001" },
      ],
    },
    {
      id: "tort-law",
      title: "Tort Law and Civil Liabilities",
      content: `Tort law in Bangladesh, while not codified in a single statute, is based on common law principles inherited from the British legal system. It deals with civil wrongs that cause harm or loss to individuals or their property. The primary types of torts recognized in Bangladesh include negligence, defamation, nuisance, and trespass. Negligence is a key concept in tort law, requiring the establishment of a duty of care, breach of that duty, and resulting damage. The concept of 'res ipsa loquitur' (the thing speaks for itself) is often applied in negligence cases where direct evidence is lacking. Defamation law in Bangladesh covers both libel (written defamation) and slander (spoken defamation). The Penal Code, 1860 also contains provisions related to defamation. Nuisance in Bangladesh can be either public or private. Public nuisance is often dealt with under criminal law, while private nuisance is addressed through civil litigation. The concept of strict liability, as established in the case of Rylands v Fletcher, is recognized in Bangladesh for certain types of dangerous activities. Tort law in Bangladesh faces several challenges, including limited public awareness, lengthy court proceedings, and the absence of a comprehensive tort law statute. However, the courts have played a significant role in developing tort law principles through case law. Recent developments include the recognition of constitutional torts, where violations of fundamental rights can give rise to civil liability. The growing importance of environmental protection has also led to an increased focus on environmental torts in Bangladesh.`,
      resources: [
        { type: "document", name: "Penal Code, 1860 (Relevant Sections)" },
        { type: "document", name: "Environmental Conservation Act, 1995" },
      ],
    },
    {
      id: "contract-disputes",
      title: "Contract Disputes and Remedies",
      content: `Contract disputes in Bangladesh are primarily governed by the Contract Act, 1872, which provides the basic framework for contract formation, performance, and breach. When disputes arise, parties can seek remedies through the civil courts or alternative dispute resolution methods. In court proceedings, the aggrieved party can file a suit for breach of contract, seeking remedies such as damages, specific performance, or injunction. The Specific Relief Act, 1877 provides the framework for specific performance and injunctions. Damages are the most common remedy for breach of contract, aimed at putting the aggrieved party in the position they would have been in had the contract been performed. Liquidated damages clauses in contracts are generally enforceable, subject to certain limitations. Alternative dispute resolution methods, such as arbitration and mediation, are gaining popularity in Bangladesh. The Arbitration Act, 2001 provides the legal framework for arbitration proceedings. Mediation is often used in commercial disputes, with the Bangladesh International Arbitration Centre (BIAC) playing a key role in promoting these methods. The concept of frustration of contract, where performance becomes impossible due to unforeseen circumstances, is recognized under Section 56 of the Contract Act. The doctrine of privity of contract is generally followed, but exceptions have been developed through case law. Recent developments in contract law include the recognition of electronic contracts under the Information and Communication Technology Act, 2006. The courts in Bangladesh have also been increasingly willing to look at the intention of the parties and the surrounding circumstances when interpreting contracts, moving away from a strictly literal approach.`,
      resources: [
        { type: "document", name: "Contract Act, 1872" },
        { type: "document", name: "Specific Relief Act, 1877" },
        { type: "document", name: "Arbitration Act, 2001" },
      ],
    },
    {
      id: "consumer-protection",
      title: "Consumer Protection Laws",
      content: `Consumer protection in Bangladesh is primarily governed by the Consumer Rights Protection Act, 2009. This Act aims to safeguard consumers' interests and provide mechanisms for addressing grievances. The Act established the Directorate of National Consumer Rights Protection, which is responsible for implementing consumer protection measures. Key provisions of the Act include prohibitions on unfair trade practices, false advertising, and the sale of counterfeit or substandard products. The Act provides for the establishment of consumer courts at the district level to address consumer complaints. Consumers can file complaints directly with these courts or through consumer associations. The Act prescribes penalties for various offenses, including fines and imprisonment. In addition to the Consumer Rights Protection Act, other laws such as the Food Safety Act, 2013 and the Bangladesh Standards and Testing Institution Ordinance, 1985 also contribute to the consumer protection framework. The Competition Act, 2012 aims to prevent anti-competitive practices that can harm consumer interests. Despite these legal provisions, challenges remain in effective implementation and consumer awareness. The e-commerce sector, which has seen rapid growth in Bangladesh, presents new challenges for consumer protection. Recent initiatives include the development of digital platforms for filing consumer complaints and increased efforts to raise public awareness about consumer rights. The Bangladesh Food Safety Authority, established under the Food Safety Act, 2013, plays a crucial role in ensuring food safety and protecting consumers from adulterated or unsafe food products.`,
      resources: [
        { type: "document", name: "Consumer Rights Protection Act, 2009" },
        { type: "document", name: "Food Safety Act, 2013" },
        { type: "document", name: "Competition Act, 2012" },
      ],
    },
    // Legal Writing Courses
    {
      id: "legal-drafting",
      title: "Legal Drafting: Contracts and Agreements",
      content: `Legal drafting is a crucial skill for lawyers in Bangladesh, particularly in the context of contracts and agreements. This course covers the principles of clear and effective legal writing, with a focus on the specific requirements of Bangladeshi law. Students will learn the structure and components of various types of contracts, including employment contracts, lease agreements, and business contracts. The course covers the use of appropriate legal terminology, the importance of precision in language, and techniques for avoiding ambiguity. Participants will study the interpretation of contracts under Bangladeshi law, including the Contract Act, 1872, and relevant case law. The course also addresses the growing importance of drafting contracts in both Bangla and English, reflecting the bilingual nature of legal practice in Bangladesh. Practical exercises will include drafting clauses for specific legal scenarios and reviewing and revising existing contracts. The course will also cover the impact of recent legislation, such as the Information and Communication Technology Act, 2006, on contract drafting, particularly in the context of electronic contracts and digital signatures. Students will learn to navigate the complexities of international contracts, considering Bangladesh's increasing participation in global trade. By the end of the course, participants will have developed the skills to draft clear, concise, and legally sound contracts and agreements tailored to the Bangladeshi legal context.`,
      resources: [
        { type: "document", name: "Contract Act, 1872" },
        { type: "document", name: "Information and Communication Technology Act, 2006" },
      ],
    },
    {
      id: "legal-research",
      title: "Legal Research and Citation",
      content: `This course equips students with advanced legal research skills tailored to the Bangladeshi legal system. Participants will learn to navigate both print and digital legal resources, including Bangladeshi law reports, statutes, and secondary sources. The course covers techniques for using legal databases and online resources specific to Bangladesh, as well as international legal databases. Students will learn to conduct efficient and effective legal research, including strategies for finding relevant case law, statutes, and scholarly articles. The course also covers proper citation methods for Bangladeshi legal materials, following the standards set by the Supreme Court of Bangladesh. Participants will learn to cite various types of legal sources, including cases, statutes, regulations, and secondary sources. The course includes practical exercises in legal research and writing, focusing on real-world legal issues in Bangladesh. Students will be introduced to the use of AI and machine learning tools in legal research, discussing both their potential and limitations in the Bangladeshi context. The course will also cover the ethical considerations in legal research, including the proper use and attribution of sources. Emphasis will be placed on developing critical analysis skills to evaluate the relevance and reliability of legal sources. By the end of the course, students will be proficient in conducting comprehensive legal research and properly citing sources in accordance with Bangladeshi legal standards.`,
      resources: [
        { type: "document", name: "Supreme Court of Bangladesh Citation Guidelines" },
        { type: "document", name: "Bangladesh Code" },
      ],
    },
    {
      id: "legal-correspondence",
      title: "Professional Legal Correspondence",
      content: `This course focuses on developing skills in professional legal correspondence within the context of legal practice in Bangladesh. Students will learn the principles of effective communication in various forms of legal writing, including formal letters, emails, and internal memos. The course covers the structure and style of different types of legal correspondence, including demand letters, cease and desist letters, and client communication. Participants will learn to adapt their writing style to different audiences, including clients, opposing counsel, and the court. The course addresses the specific requirements of legal correspondence in Bangladesh, including the use of appropriate honorifics and formal language in Bangla and English. Students will practice drafting various types of legal correspondence, with a focus on clarity, conciseness, and professionalism. The course also covers ethical considerations in legal communication, including maintaining client confidentiality and avoiding conflicts of interest. Participants will learn how to effectively communicate complex legal concepts to non-legal audiences, an essential skill when corresponding with clients. The course will address the increasing importance of digital communication in legal practice, including best practices for email etiquette and the legal implications of electronic communication. Students will also learn techniques for persuasive writing in legal correspondence, particularly useful in settlement negotiations and pre-litigation communication. By the end of the course, participants will have developed the skills to craft professional, effective, and culturally appropriate legal correspondence in the Bangladeshi legal context.`,
      resources: [
        { type: "document", name: "Bangladesh Bar Council Ethics Guidelines" },
        { type: "document", name: "Information and Communication Technology Act, 2006" },
      ],
    },
    {
      id: "legal-analysis",
      title: "Legal Analysis and Writing",
      content: `This course is designed to enhance students' skills in legal analysis and argumentation, with a focus on written presentation. Participants will learn techniques for analyzing complex legal issues, identifying relevant facts and legal principles, and constructing persuasive legal arguments. The course covers the IRAC (Issue, Rule, Analysis, Conclusion) method and other frameworks for organizing legal analysis. Students will practice applying these techniques to real-world legal scenarios in Bangladesh, covering various areas of law including constitutional law, civil law, and criminal law. The course emphasizes the importance of clear and logical presentation of legal arguments in writing. Participants will learn to structure legal memoranda, opinion letters, and other forms of legal writing common in Bangladeshi legal practice. The course also covers techniques for effective legal reasoning, including the use of analogies, distinguishing cases, and addressing counterarguments. Practical exercises will include analyzing hypothetical cases and drafting legal memoranda and briefs. Students will learn to integrate statutory interpretation and case law analysis in their legal writing, reflecting the mixed common law and statutory law system of Bangladesh. The course will also address the challenges of legal writing in a bilingual context, providing strategies for maintaining clarity and precision when working between Bangla and English. Emphasis will be placed on developing a concise yet comprehensive writing style, essential for effective communication in the often overburdened Bangladeshi legal system. By the end of the course, students will have honed their skills in legal analysis and writing, enabling them to produce well-reasoned and persuasive legal documents.`,
      resources: [
        { type: "document", name: "Constitution of Bangladesh" },
        { type: "document", name: "Interpretation of Statutes Act, 1897" },
      ],
    },
    {
      id: "advocacy-writing",
      title: "Advocacy Writing for Court",
      content: `This course focuses on developing skills in advocacy writing for court proceedings in Bangladesh. Students will learn techniques for drafting persuasive legal documents, including plaints, written statements, petitions, and appeals. The course covers the specific requirements of different types of legal documents in the Bangladeshi court system, including the proper format and structure as per the Civil Procedure Code and Criminal Procedure Code. Participants will learn to craft compelling legal arguments, effectively present facts, and use precedents to support their positions. The course emphasizes the importance of clarity, precision, and persuasiveness in legal writing for the court. Students will practice drafting various court documents, with a focus on tailoring arguments to specific legal and factual contexts. The course also covers ethical considerations in advocacy writing, including the duty of candor to the court and the responsibility to present arguments fairly and accurately. Practical exercises will include drafting court documents for hypothetical cases and analyzing and critiquing sample court submissions. The course will address the specific challenges of advocacy writing in the Bangladeshi legal system, including strategies for dealing with case backlogs and the need for concise yet comprehensive arguments. Students will learn to effectively use legal authorities, including statutes, case law, and secondary sources, to strengthen their written advocacy. The course will also cover techniques for addressing procedural issues in written submissions, a critical skill in navigating the complex procedural landscape of Bangladeshi courts. By the end of the course, participants will have developed the skills to produce persuasive, well-structured, and legally sound documents for court proceedings in Bangladesh.`,
      resources: [
        { type: "document", name: "Civil Procedure Code, 1908" },
        { type: "document", name: "Criminal Procedure Code, 1898" },
        { type: "document", name: "Supreme Court of Bangladesh Practice Directions" },
      ],
    },
    // International Law Courses
    {
      id: "public-international-law",
      title: "Public International Law",
      content: `This course provides a comprehensive overview of public international law with a focus on Bangladesh's perspective and involvement in the international legal system. Students will study the sources of international law, including treaties, customary international law, and general principles of law. The course covers key areas of public international law such as state responsibility, diplomatic relations, and the law of the sea, with particular emphasis on how these areas affect Bangladesh. Participants will examine Bangladesh's participation in international organizations, including the United Nations and regional bodies like SAARC (South Asian Association for Regional Cooperation). The course also addresses international dispute resolution mechanisms and Bangladesh's experience with international courts and tribunals, including the landmark maritime boundary delimitation cases with Myanmar (2012) and India (2014) at the International Tribunal for the Law of the Sea. Students will analyze other significant cases involving Bangladesh in international law, such as the Rohingya genocide case at the International Court of Justice. The course will cover current international legal issues relevant to Bangladesh, including climate change and its impact on low-lying coastal areas, human rights concerns, and international trade law in the context of Bangladesh's developing economy. Special attention will be given to Bangladesh's obligations under various international treaties and conventions, and how these are implemented in domestic law. By the end of the course, students will have a solid understanding of how public international law shapes Bangladesh's foreign policy and domestic legal framework.`,
      resources: [
        { type: "document", name: "UN Charter" },
        { type: "document", name: "Vienna Convention on the Law of Treaties" },
        { type: "document", name: "UN Convention on the Law of the Sea" },
      ],
    },
    {
      id: "international-trade-law",
      title: "International Trade Law",
      content: `This course examines the legal framework governing international trade, with a particular focus on Bangladesh's position and interests in the global trading system. Students will study the World Trade Organization (WTO) agreements and their impact on Bangladesh's trade policies and practices. The course covers key principles of international trade law, including most-favored-nation treatment, national treatment, and tariff bindings. Participants will analyze Bangladesh's commitments under various WTO agreements, including the General Agreement on Tariffs and Trade (GATT), the Agreement on Agriculture, and the Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS). The course also examines regional trade agreements relevant to Bangladesh, such as the South Asian Free Trade Area (SAFTA) and bilateral trade agreements. Students will study trade remedies and dispute settlement mechanisms in international trade law, including Bangladesh's experience with trade disputes. The course will cover current issues in international trade law relevant to Bangladesh, such as trade in services, e-commerce, and the challenges and opportunities presented by global value chains. Special attention will be given to Bangladesh's status as a least developed country (LDC) and the special provisions and challenges this entails in international trade. The course will also address Bangladesh's transition from LDC status and its implications for trade preferences and obligations. Students will examine Bangladesh's export-oriented industries, particularly the ready-made garment sector, and the international trade laws and agreements that affect these industries. Practical exercises will include analyzing trade agreements and simulating trade negotiations relevant to Bangladesh's economic interests.`,
      resources: [
        { type: "document", name: "WTO Agreement" },
        { type: "document", name: "GATT 1994" },
        { type: "document", name: "TRIPS Agreement" },
        { type: "document", name: "SAFTA Agreement" },
      ],
    },
    {
      id: "human-rights-law",
      title: "International Human Rights Law",
      content: `This course provides a comprehensive study of international human rights law and its application in Bangladesh. Students will examine the major international human rights instruments, including the Universal Declaration of Human Rights, the International Covenant on Civil and Political Rights, and the International Covenant on Economic, Social and Cultural Rights. The course will analyze Bangladesh's obligations under these treaties and the mechanisms for their implementation in domestic law. Participants will study the role of international and regional human rights bodies, such as the UN Human Rights Council and the Asian Human Rights Commission, in promoting and protecting human rights in Bangladesh. The course will cover key human rights issues in Bangladesh, including freedom of expression, women's rights, children's rights, and the rights of minorities and indigenous peoples. Students will examine case studies of human rights advocacy in Bangladesh and analyze the challenges and successes in implementing international human rights standards. The course will also address the intersection of human rights with other areas of international law, such as refugee law and international criminal law. Particular attention will be given to the Rohingya refugee crisis and its human rights implications for Bangladesh. The course will explore the tension between cultural relativism and universal human rights in the Bangladeshi context. Students will study the role of national institutions, such as the National Human Rights Commission of Bangladesh, in promoting and protecting human rights. The course will also cover the impact of development and economic policies on human rights in Bangladesh. By the end of the course, students will have a thorough understanding of international human rights law and its practical application in Bangladesh.`,
      resources: [
        { type: "document", name: "Universal Declaration of Human Rights" },
        { type: "document", name: "International Covenant on Civil and Political Rights" },
        { type: "document", name: "International Covenant on Economic, Social and Cultural Rights" },
        { type: "document", name: "Bangladesh National Human Rights Commission Act, 2009" },
      ],
    },
    {
      id: "international-arbitration",
      title: "International Arbitration",
      content: `This course focuses on international arbitration as a method of resolving cross-border commercial and investment disputes, with particular emphasis on its relevance to Bangladesh. Students will study the legal framework for international arbitration, including the New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards and the UNCITRAL Model Law on International Commercial Arbitration. The course will examine the Arbitration Act 2001 of Bangladesh and its provisions relating to international arbitration. Participants will learn about the procedural aspects of international arbitration, including the selection of arbitrators, the conduct of arbitral proceedings, and the enforcement of arbitral awards. The course will cover both commercial arbitration an  and the enforcement of arbitral awards. The course will cover both commercial arbitration and investment arbitration, with a focus on bilateral investment treaties and their dispute resolution mechanisms. Students will analyze landmark arbitration cases involving Bangladesh or relevant to Bangladesh's interests, such as the Saipem v. Bangladesh case. The course will also address current issues in international arbitration, such as transparency, costs, and the use of technology in arbitral proceedings. Special attention will be given to the role of the Bangladesh International Arbitration Centre (BIAC) in promoting alternative dispute resolution. Students will learn about the challenges and opportunities for Bangladesh in attracting and conducting international arbitrations. The course will cover the enforcement of foreign arbitral awards in Bangladesh and the grounds for challenging such awards under Bangladesh law. Practical exercises will include drafting arbitration clauses and simulating arbitration proceedings relevant to cross-border disputes involving Bangladeshi parties.`,
      resources: [
        { type: "document", name: "New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards" },
        { type: "document", name: "UNCITRAL Model Law on International Commercial Arbitration" },
        { type: "document", name: "Arbitration Act 2001 of Bangladesh" },
      ],
    },
    {
      id: "immigration-law",
      title: "Immigration and Refugee Law",
      content: `This course examines immigration and refugee law from a Bangladeshi perspective, covering both domestic legislation and international legal frameworks. Students will study the key principles of international refugee law, including the 1951 Refugee Convention and its 1967 Protocol, and analyze Bangladesh's approach to refugee protection, particularly in the context of the Rohingya refugee crisis. The course will cover Bangladesh's immigration laws and policies, including visa regulations, work permits, and citizenship laws. Participants will examine the legal and policy challenges associated with managing large-scale refugee populations, including issues of status determination, camp management, and durable solutions. The course will also address the intersection of immigration and human rights law, including the principle of non-refoulement and the rights of migrant workers. Students will study Bangladesh's engagement with international organizations such as the UNHCR and IOM in managing migration and refugee issues. The course will cover current debates in immigration and refugee law, including climate-induced displacement and the global compact on refugees, with specific reference to Bangladesh's vulnerability to climate change and its potential impact on population movements. Case studies will be used to illustrate the practical application of immigration and refugee law in the Bangladeshi context. The course will also examine Bangladesh's labor migration policies and the legal framework governing the rights of Bangladeshi workers abroad. Students will analyze the challenges of human trafficking and smuggling in the region and Bangladesh's legal responses to these issues. By the end of the course, participants will have a comprehensive understanding of immigration and refugee law from both a domestic and international perspective, with a focus on the unique challenges faced by Bangladesh.`,
      resources: [
        { type: "document", name: "1951 Refugee Convention" },
        { type: "document", name: "1967 Protocol Relating to the Status of Refugees" },
        { type: "document", name: "Bangladesh Citizenship Act, 1951" },
        { type: "document", name: "Prevention and Suppression of Human Trafficking Act, 2012" },
      ],
    },
  ]

  return allCourses.find((course) => course.id === courseId) || null
}
interface Params {
  courseId: string
}

export default async function CourseDetailsPage(props: { params: Promise<Params> }) {
  const params = await props.params;
  const courseDetails = getCourseDetails(params.courseId)


  if (!courseDetails) {
    return <div>Course not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="container max-w-4xl mx-auto py-12 px-4">
        <BackButton />
        <Card className="mb-8 bg-primary-50 border-gray-200">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-900">{courseDetails.title}</CardTitle>
          </CardHeader>
        </Card>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="bg-[#f5f5dc]">
            <TabsTrigger
              value="overview"
              className="text-gray-700 data-[state=active]:bg-primary-50 data-[state=active]:text-gray-900"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="resources"
              className="text-gray-700 data-[state=active]:bg-primary-50 data-[state=active]:text-gray-900"
            >
              Resources
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <Card className="bg-primary-50 border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Course Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none text-gray-700">
                  {courseDetails.content.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="resources" className="space-y-4">
            <Card className="bg-primary-50 border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Course Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {courseDetails.resources.map((resource, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-700">
                      <FileText className="w-5 h-5 text-gray-600" />
                      <span>{resource.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

