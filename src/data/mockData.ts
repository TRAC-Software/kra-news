export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Global Climate Summit Reaches Historic Agreement on Emissions',
    slug: 'global-climate-summit-reaches-historic-agreement',
    excerpt: 'World leaders have reached a landmark agreement to reduce carbon emissions by 50% by 2030, marking a significant step forward in the fight against climate change.',
    content: `
      <p>In a historic move that signals a new era of international cooperation on climate action, world leaders at the Global Climate Summit have reached a landmark agreement to reduce carbon emissions by 50% by 2030.</p>
      
      <p>The agreement, which was signed by 195 countries, includes binding commitments to phase out coal power, accelerate the transition to renewable energy, and provide financial support to developing nations most affected by climate change.</p>
      
      <p>"This is a pivotal moment in our collective effort to address the climate crisis," said UN Secretary-General António Guterres. "For the first time, we have a truly global commitment that matches the scale of the challenge we face."</p>
      
      <p>The agreement comes after two weeks of intense negotiations, during which delegates worked to bridge divides between developed and developing nations over issues of financing and responsibility.</p>
      
      <p>Key provisions of the agreement include:</p>
      
      <ul>
        <li>A 50% reduction in global carbon emissions by 2030, compared to 2005 levels</li>
        <li>A commitment to reach net-zero emissions by 2050</li>
        <li>The establishment of a $100 billion annual fund to help developing countries transition to clean energy</li>
        <li>A phase-out of coal power in developed countries by 2030 and in developing countries by 2040</li>
        <li>Increased investment in climate adaptation measures, particularly for vulnerable communities</li>
      </ul>
      
      <p>Environmental groups have largely welcomed the agreement, though some have criticized it for not going far enough or fast enough to prevent the worst impacts of climate change.</p>
      
      <p>"This is a significant step forward, but we must acknowledge that it's just the beginning of the work that needs to be done," said Dr. Jane Mitchell, director of the Climate Action Coalition. "The real test will be in the implementation."</p>
      
      <p>Markets responded positively to the news, with renewable energy stocks seeing significant gains as investors anticipate increased government support and investment in the sector.</p>
      
      <p>The agreement will now need to be ratified by individual countries, a process that is expected to take several months. Implementation will be monitored by a newly established international body, with regular progress reviews scheduled every two years.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1623107274042-25987acf211c?q=80&w=1000',
    category: 'Politics',
    date: 'March 10, 2024',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    }
  },
  {
    id: '2',
    title: 'Tech Giant Unveils Revolutionary AI Assistant for Healthcare',
    slug: 'tech-giant-unveils-revolutionary-ai-assistant-for-healthcare',
    excerpt: 'A leading technology company has launched an AI-powered healthcare assistant that promises to transform patient care and medical diagnostics.',
    content: `
      <p>In a move that could revolutionize healthcare delivery, tech giant MediTech has unveiled an advanced AI assistant designed specifically for medical professionals and patients.</p>
      
      <p>The system, named "MediAI," uses deep learning algorithms trained on millions of medical records and the latest research to assist doctors with diagnostics, treatment recommendations, and patient monitoring.</p>
      
      <p>"MediAI represents a quantum leap in how we approach healthcare," said Dr. Robert Chen, Chief Medical Officer at MediTech. "It's not about replacing doctors, but rather augmenting their capabilities and helping them make more informed decisions more quickly."</p>
      
      <p>According to MediTech, the AI assistant has demonstrated remarkable accuracy in early trials, correctly identifying complex conditions that often elude human diagnosticians. In one study, it detected early signs of pancreatic cancer with 94% accuracy, significantly higher than the current average for human doctors.</p>
      
      <p>Key features of the MediAI system include:</p>
      
      <ul>
        <li>Real-time analysis of patient symptoms and medical history</li>
        <li>Integration with electronic health records and medical imaging systems</li>
        <li>Personalized treatment recommendations based on the latest research</li>
        <li>Continuous monitoring of patient vital signs and medication adherence</li>
        <li>Natural language processing capabilities for patient-doctor communication</li>
      </ul>
      
      <p>The system is already being deployed in several major hospitals across the country, with plans for wider rollout over the next year.</p>
      
      <p>Healthcare professionals have expressed both excitement and caution about the new technology. "The potential benefits are enormous," said Dr. Maria Sanchez, a cardiologist at University Medical Center. "But we need to ensure that these systems are properly validated, transparent in their decision-making, and used as tools rather than replacements for human judgment."</p>
      
      <p>Privacy advocates have also raised concerns about the vast amounts of sensitive patient data being used to train and operate the AI system. MediTech has responded by emphasizing its commitment to data security and compliance with all relevant healthcare privacy regulations.</p>
      
      <p>The company is also developing a consumer version of the technology that would allow patients to access basic health advice and monitoring through a smartphone app, though this version would have more limited capabilities than the professional system.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000',
    category: 'Technology',
    date: 'March 9, 2024',
    author: {
      name: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    }
  },
  {
    id: '3',
    title: 'Major Economic Reform Package Announced to Boost Growth',
    slug: 'major-economic-reform-package-announced-to-boost-growth',
    excerpt: 'The government has unveiled a comprehensive economic reform package aimed at stimulating growth, creating jobs, and addressing inflation concerns.',
    content: `
      <p>In a bid to revitalize the economy and address growing concerns about inflation and unemployment, the government has announced a sweeping package of economic reforms.</p>
      
      <p>The package, which includes tax cuts, infrastructure investments, and regulatory changes, is designed to stimulate economic growth while also addressing long-term structural challenges.</p>
      
      <p>"This is a balanced approach that will create jobs, boost productivity, and ensure that the benefits of growth are shared by all," said Finance Minister James Wilson at a press conference announcing the measures.</p>
      
      <p>The reform package includes several key components:</p>
      
      <ul>
        <li>A reduction in corporate tax rates from 28% to 25% for businesses that meet certain investment and employment criteria</li>
        <li>A $200 billion infrastructure investment program focused on transportation, clean energy, and digital connectivity</li>
        <li>Regulatory reforms aimed at reducing bureaucratic hurdles for small and medium-sized enterprises</li>
        <li>Expanded job training programs targeting sectors with high growth potential</li>
        <li>Measures to increase competition in key industries, including telecommunications and banking</li>
      </ul>
      
      <p>Economists have offered mixed reactions to the announcement. "These reforms address some important structural issues in the economy," said Dr. Elena Rodriguez, chief economist at Capital Research. "However, the tax cuts may exacerbate budget deficits without necessarily delivering the promised growth benefits."</p>
      
      <p>Business leaders have generally welcomed the package, particularly the tax cuts and regulatory reforms. "This creates a more favorable environment for investment and job creation," said Thomas Brown, president of the National Business Federation.</p>
      
      <p>Labor unions, however, have criticized aspects of the package, arguing that it favors corporations over workers. "We need to see more direct support for working families who are struggling with rising costs," said Union leader Patricia Garcia.</p>
      
      <p>The government estimates that the reforms will boost economic growth by 0.5 to 1 percentage point annually over the next five years and create approximately 500,000 new jobs. Critics question these projections, pointing to similar promises made for previous reform packages that failed to deliver expected results.</p>
      
      <p>Implementation of the various measures will begin next month, with the tax changes taking effect at the start of the next fiscal year.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1607944024060-0450380ddd33?q=80&w=1000',
    category: 'Business',
    date: 'March 8, 2024',
    author: {
      name: 'David Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
    }
  },
  {
    id: '4',
    title: 'Breakthrough Study Reveals Promising Treatment for Alzheimer\'s Disease',
    slug: 'breakthrough-study-reveals-promising-treatment-for-alzheimers',
    excerpt: 'Scientists have announced a potential breakthrough in Alzheimer\'s treatment that could slow or even reverse the progression of the disease.',
    content: `
      <p>In what could be a landmark development in the fight against Alzheimer's disease, researchers have announced promising results from a clinical trial of a new treatment approach that targets the underlying causes of the condition.</p>
      
      <p>The study, published in the prestigious Journal of Neuroscience, shows that the experimental treatment was able to significantly slow cognitive decline in patients with early to moderate Alzheimer's, and in some cases even reverse some symptoms.</p>
      
      <p>"These results represent the most significant advance in Alzheimer's treatment in decades," said Dr. Jennifer Lee, the lead researcher on the study. "While we must be cautious about overstating the implications, the data suggests we may finally have a way to meaningfully intervene in the disease process."</p>
      
      <p>The treatment, known as NTX-2020, uses a novel approach that combines targeted immunotherapy with a compound that helps clear toxic protein accumulations in the brain. Unlike previous treatments that focused solely on amyloid plaques, NTX-2020 addresses multiple pathological processes involved in Alzheimer's.</p>
      
      <p>Key findings from the study include:</p>
      
      <ul>
        <li>Patients receiving the treatment showed 63% less cognitive decline over 18 months compared to those receiving a placebo</li>
        <li>Brain scans revealed a significant reduction in both amyloid plaques and tau tangles, two hallmarks of Alzheimer's disease</li>
        <li>30% of patients showed actual improvement in some cognitive measures, suggesting partial reversal of symptoms</li>
        <li>The treatment was generally well-tolerated, with most side effects being mild to moderate</li>
      </ul>
      
      <p>The trial involved 420 patients across 32 medical centers and represents the third phase of clinical testing. If approved by regulatory authorities, the treatment could become available to patients within two years.</p>
      
      <p>Alzheimer's disease affects an estimated 6.5 million Americans and is a leading cause of death among older adults. Current treatments can temporarily alleviate some symptoms but do not alter the course of the disease.</p>
      
      <p>"This gives us real hope," said Maria Gonzalez, whose mother participated in the trial. "For the first time, we're seeing not just a slowing of decline but actual improvements in day-to-day functioning."</p>
      
      <p>The research team is now planning a larger trial with more diverse participants to confirm the results and further assess long-term safety. They are also investigating whether the treatment could be effective in preventing Alzheimer's in people at high risk who have not yet developed symptoms.</p>
      
      <p>While experts caution that more research is needed, many in the field are cautiously optimistic. "If these results hold up in larger studies, this could fundamentally change how we approach Alzheimer's disease," said Dr. William Chen, director of the National Institute on Aging, who was not involved in the study.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1576671414121-aa2d60f1d5c4?q=80&w=1000',
    category: 'Health',
    date: 'March 7, 2024',
    author: {
      name: 'Emily Parker',
      avatar: 'https://randomuser.me/api/portraits/women/23.jpg'
    }
  },
  {
    id: '5',
    title: 'Acclaimed Director Announces Ambitious New Film Project',
    slug: 'acclaimed-director-announces-ambitious-new-film-project',
    excerpt: 'Award-winning filmmaker reveals plans for an epic historical drama that will span three centuries and feature an ensemble cast of A-list actors.',
    content: `
      <p>Acclaimed director Christopher Nolan has announced his most ambitious project to date: a sweeping historical epic that will span three centuries and feature an ensemble cast of Hollywood's biggest stars.</p>
      
      <p>The film, titled "Eternal," will explore the interconnected stories of five families across different time periods, from the Industrial Revolution to the present day and into a speculative future.</p>
      
      <p>"This is a story about how the choices we make echo through generations," Nolan said at a press event announcing the project. "It's about the patterns that repeat in human history and the individuals who, knowingly or unknowingly, shape the course of civilization."</p>
      
      <p>The project has already attracted an impressive lineup of talent, including:</p>
      
      <ul>
        <li>Meryl Streep and Daniel Day-Lewis, who is coming out of retirement specifically for this film</li>
        <li>Rising stars Florence Pugh and John David Washington</li>
        <li>Veteran actors Anthony Hopkins and Helen Mirren</li>
        <li>International stars Deepika Padukone and Song Kang-ho</li>
      </ul>
      
      <p>With a reported budget of $250 million, "Eternal" will be one of the most expensive non-franchise films ever made. Filming is set to take place across five continents over the course of 18 months, using a combination of practical effects and cutting-edge digital technology.</p>
      
      <p>"The scale of this project is unprecedented," said producer Emma Thomas. "But Christopher has a clear vision for how all these elements will come together to create something truly unique in cinema."</p>
      
      <p>The film will employ innovative narrative techniques, including what Nolan describes as "temporal crosscutting," where scenes from different time periods will be juxtaposed to reveal thematic connections and causal relationships across centuries.</p>
      
      <p>Industry analysts see the project as a bold bet on original storytelling in an era dominated by franchises and adaptations. "This is the kind of ambitious filmmaking that rarely gets greenlit anymore," said film critic Richard Martinez. "It's a testament to Nolan's track record that he's able to secure this level of investment for an original concept."</p>
      
      <p>The screenplay, written by Nolan and his brother Jonathan, has been in development for over five years. The film will also feature an original score by longtime Nolan collaborator Hans Zimmer.</p>
      
      <p>"Eternal" is scheduled for release in IMAX and standard formats in December 2025, positioning it as a major awards contender.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000',
    category: 'Entertainment',
    date: 'March 6, 2024',
    author: {
      name: 'Robert Thompson',
      avatar: 'https://randomuser.me/api/portraits/men/41.jpg'
    }
  },
  {
    id: '6',
    title: 'New Study Links Regular Exercise to Improved Mental Health',
    slug: 'new-study-links-regular-exercise-to-improved-mental-health',
    excerpt: 'Researchers have found strong evidence that regular physical activity can significantly reduce symptoms of anxiety and depression.',
    content: `
      <p>A comprehensive new study has provided the strongest evidence yet that regular exercise can have profound benefits for mental health, particularly in reducing symptoms of anxiety and depression.</p>
      
      <p>The research, conducted over a five-year period and involving more than 10,000 participants, found that people who engaged in regular physical activity were 30% less likely to develop depression and 45% less likely to experience anxiety disorders compared to sedentary individuals.</p>
      
      <p>"The relationship between physical and mental health has been observed for centuries, but this study provides robust scientific evidence of just how powerful that connection is," said Dr. Rebecca Martinez, the study's lead author and professor of psychiatry at University Medical Center.</p>
      
      <p>The study found that even moderate amounts of exercise can have significant benefits. Participants who engaged in just 150 minutes of moderate activity per week – the amount recommended by most health authorities – saw substantial improvements in mental wellbeing.</p>
      
      <p>Key findings from the research include:</p>
      
      <ul>
        <li>Exercise appears to be as effective as medication for mild to moderate depression in many individuals</li>
        <li>The mental health benefits were observed across all age groups and demographics</li>
        <li>Both aerobic exercise (like walking or swimming) and strength training showed positive effects</li>
        <li>Consistency was more important than intensity – regular, moderate exercise was more beneficial than occasional intense workouts</li>
        <li>The positive effects began to appear after just two weeks of regular activity</li>
      </ul>
      
      <p>The researchers identified several mechanisms that may explain the mental health benefits of exercise, including increased production of endorphins and other mood-enhancing neurotransmitters, reduced inflammation, improved sleep quality, and enhanced self-esteem.</p>
      
      <p>"What's particularly exciting is that exercise represents a low-cost, accessible intervention with minimal side effects," said co-author Dr. James Wilson. "Unlike many medications, exercise doesn't just mask symptoms – it appears to address some of the underlying biological factors that contribute to mental health conditions."</p>
      
      <p>Mental health professionals are increasingly incorporating exercise recommendations into treatment plans for patients with depression and anxiety. "We're not suggesting that exercise should replace traditional treatments like therapy or medication in all cases," Dr. Martinez emphasized. "But these findings strongly suggest it should be considered a core component of mental health care."</p>
      
      <p>The study also found that group-based physical activities, such as team sports or exercise classes, provided additional benefits, likely due to the social connection they foster.</p>
      
      <p>The researchers are now investigating whether specific types of exercise might be particularly beneficial for different mental health conditions, and how exercise interventions can be tailored to individual needs and preferences.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000',
    category: 'Health',
    date: 'March 5, 2024',
    author: {
      name: 'Jennifer Adams',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
    }
  }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => article.category.toLowerCase() === category.toLowerCase());
};

export const getFeaturedArticle = (): Article => {
  return articles[0]; // For simplicity, we're using the first article as featured
}; 