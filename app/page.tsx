import Link from "next/link"
import { Github, Linkedin, Mail, Award, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-gray-950/80 dark:border-gray-800">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Antriksh Arya</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="#responsibilities" className="text-sm font-medium hover:text-primary">
              Responsibilities
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/vdhkcheems" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/antriksharya" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:antriksh0704@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col items-center text-center">
          <div className="mb-8">
            <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
              <AvatarImage src="/me.jpeg?height=128&width=128" alt="Antriksh Arya" />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Antriksh Arya</h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            Artficial Intelligence and Machine Learning
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge className="bg-blue-600 hover:bg-blue-700">Machine Learning</Badge>
            <Badge className="bg-blue-600 hover:bg-blue-700">NLP</Badge>
            <Badge className="bg-blue-600 hover:bg-blue-700">Deep Learning</Badge>
            <Badge className="bg-blue-600 hover:bg-blue-700">Python</Badge>
            <Badge className="bg-blue-600 hover:bg-blue-700">PyTorch</Badge>
            <Badge className="bg-blue-600 hover:bg-blue-700">Tensorflow</Badge>
            <Badge className="bg-blue-600 hover:bg-blue-700">RAG</Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
          <div className="animate-bounce">
            <Link href="#about">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ChevronDown className="h-6 w-6" />
                <span className="sr-only">Scroll Down</span>
              </Button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
            <div className="space-y-4 text-lg">
              <p>
                I'm an Engineering student at Netaji Subhas University of Technology with a
                strong passion for AI and Machine Learning. Currently maintaining a CGPA of 8.6/10, I'm dedicated to
                applying my technical skills to solve real-world problems.
              </p>
              <p>
                As a Data Science and Applied AI intern at a startup and a Machine Learning Mentor at Google
                Developers Student Club, I've developed expertise in Data Science, NLP, LLMs, deep learning, and various ML frameworks. I'm
                particularly interested in developing AI systems that can understand and evaluate human language.
              </p>
              <p>
                With experience in Python, PyTorch, Hugging Face Transformers, and other ML libraries, I'm constantly
                seeking opportunities to grow my skills and contribute to innovative projects in the AI/ML space.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="border rounded-lg p-6 mb-8 bg-white dark:bg-gray-900 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-xl font-bold">Data Science and Applied AI intern</h3>
                <div className="text-gray-600 dark:text-gray-400">Mar 2025 – Present</div>
              </div>
              <div className="text-gray-600 dark:text-gray-400 mb-4">
                Dr. Vijay Kumar Bohat, Department of CSE, NSUT Delhi
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                Engineered a derived dataset by aggregating insights from 1M+ records across 5 casting-related datasets,
                enabling hedge funds and investment firms to extract monetizable trends.
                </li>
                <li>
                Built an LLM-driven fact extraction pipeline using few-shot prompting via OpenRouter
                to identify business signals from unstructured data.
                </li>
                <li>
                Designed and optimized retrieval pipelines with Qdrant collections with 2k+ data points
                implementing dense, sparse, and hybrid search methods to enable scalable, high-precision information retrieval.
                </li>
                <li>Leveraged Python, Pandas, Huggingface Transformers, Openrouter, Qdrant to preprocess and transform raw data into high-signal investment intelligence and
                  also handle retrieval functionalities in production codebase.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-sm">
              <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <img
                  src="/Screenshot_20250514_194101.png?height=192&width=384"
                  alt="AURA"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">AURA (Atificial Understanding of Research Articles)</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Apr 2025 – Present</div>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">FAISS</Badge>
                    <Badge variant="outline">LangChain</Badge>
                    <Badge variant="outline">Gemini API</Badge>
                    <Badge variant="outline">RAG</Badge>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Built a modular Retrieval-Augmented Generation system for answering questions over uploaded research papers.</li>
                  <li>Used FAISS for vector-based retrieval, with retrieval and generation logic decoupled across clean scripts.</li>
                  <li>Integrated Gemini Pro API to generate concise, accurate answers grounded in the source documents.</li>
                  <li>Currently supports multi-paper querying with dynamic metadata tracking and paper management.</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link
                    href="https://aura-vdhkcheems.streamlit.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Streamlit
                  </Link>
                </Button>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-sm">
              <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <img
                  src="/Screenshot_20250514_194953.png?height=192&width=384"
                  alt="Automated Essay Scorer"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">Automated Essay Scorer</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Dec 2024 – Feb 2025</div>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">PyTorch</Badge>
                    <Badge variant="outline">Hugging Face</Badge>
                    <Badge variant="outline">NLP</Badge>
                    <Badge variant="outline">FastAPI</Badge>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>
                    Addressed the challenge of subjective essay grading by developing and deploying an AES system using
                    a fine-tuned DeBERTa-v3-large model on a 30k large dataset.
                  </li>
                  <li>
                    The model achieved a validation QWK score of 0.84 which is equivalent to industry standard
                    performance.
                  </li>
                  <li>
                    Built a FastAPI-based backend for real-time essay evaluation, efficiently handling user inputs and
                    model inference.
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link
                    href="https://github.com/vdhkcheems/automated-essay-scorer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-sm">
              <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <img
                  src="Screenshot_20250514_195033.png?height=192&width=384"
                  alt="Life Bridge"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">Life Bridge (SIH 2024)</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Aug 2024 – Oct 2024</div>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">SMOTE</Badge>
                    <Badge variant="outline">Scikit Learn</Badge>
                    <Badge variant="outline">GBM</Badge>
                    <Badge variant="outline">Numpy</Badge>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>
                    Developed an organ urgency prediction model with 95% accuracy to prioritize transplant recipients
                    based on medical data.
                  </li>
                  <li>
                    Used SMOTE for oversampling to get a data with 5k rows, Stacking Classifier for ensembling various
                    Gradient Boosting Models (lGBM & XGB).
                  </li>
                  <li>
                    Built a disease prediction model with a 98% validation accuracy on a synthetic kaggle dataset.
                  </li>
                  <li>
                    Collaborated in a team of 6, integrating ML models into a full-stack web app with admin dashboard &
                    Gemini API.
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://github.com/JainArchit16/LifeBridge_SIH" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-sm">
              <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <img src="/placeholder.svg?height=192&width=768" alt="Nucl-AI" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">Nucl-AI</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400">January 2024 – March 2024</div>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Gemini API</Badge>
                    <Badge variant="outline">GitHub</Badge>
                    <Badge variant="outline">Google Colab</Badge>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>
                    Contributed to a team of 10+ in developing a prompt engineering based chatbot game for Annual fest
                    of NSUT leveraging Google's Gemini API.
                  </li>
                  <li>
                    The game has 5 levels of increasing difficulty where the player has to design efficient prompts on
                    each level to get the secret password.
                  </li>
                  <li>The game based event attracted 50+ participants and earned 9 stars on GitHub.</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://github.com/ManasMadan/GDSC-ML-MOKSHA-EVENT" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Position of Responsibilities Section */}
        <section id="responsibilities" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Position of Responsibilities</h2>
          <div className="max-w-4xl mx-auto">
            <div className="border rounded-lg p-6 bg-white dark:bg-gray-900 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-xl font-bold">Machine Learning Mentor</h3>
                <div className="text-gray-600 dark:text-gray-400">November 2023 – Present</div>
              </div>
              <div className="text-gray-600 dark:text-gray-400 mb-4">Google Developers Student Club, NSUT, Delhi</div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Contributed in the development of Nucl-AI</li>
                <li>Helped in conducting a college wide machine learning bootcamp for beginners.</li>
                <li>
                  Conducted interviews for recruitment of students in GDSC ML department and mentored the 7 recruits.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6 bg-white dark:bg-gray-900 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-600 hover:bg-blue-700">Python</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">C/C++</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">SQL</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">HTML/CSS</Badge>
              </div>
            </div>

            <div className="border rounded-lg p-6 bg-white dark:bg-gray-900 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
              <Badge className="bg-blue-600 hover:bg-blue-700">RAG</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">NLP</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">Data Visualization</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">Classical Models</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">Neural Networks</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">Transformers</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">Statistics</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">Modeling</Badge>
              </div>
            </div>

            <div className="border rounded-lg p-6 bg-white dark:bg-gray-900 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Developer Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-600 hover:bg-blue-700">Git & GitHub</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">Google Cloud Platform</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">Jupyter Notebook</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">VS Code</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">Linux</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">OpenRouter</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">Qdrant</Badge>
              </div>
            </div>

            <div className="border rounded-lg p-6 bg-white dark:bg-gray-900 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Libraries</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-600 hover:bg-blue-700">PyTorch</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">TensorFlow</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">Hugging Face</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">Scikit-learn</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">NumPy</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">Pandas</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">Matplotlib</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">Seaborn</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Achievements</h2>
          <div className="max-w-4xl mx-auto">
            <div className="border rounded-lg p-6 bg-white dark:bg-gray-900 shadow-sm flex items-center gap-6">
              <div className="hidden md:flex">
                <Award className="h-16 w-16 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Kaggle 3x Medals</h3>
                <p className="text-gray-600 dark:text-gray-400">
                Earned 1 Competition medal for securing 144th rank out of 1692 teams in the 'LLM's you can't please them all' competition
                and 2 notebook medals on Kaggle for insightful data analysis and solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>
          <div className="max-w-lg mx-auto">
            <div className="grid gap-6">
              <div className="flex items-center gap-4 p-4 border rounded-lg bg-white dark:bg-gray-900 shadow-sm">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:antriksh0704@gmail.com" className="text-blue-600 hover:underline">
                    antriksh0704@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border rounded-lg bg-white dark:bg-gray-900 shadow-sm">
                <Linkedin className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <a
                    href="https://linkedin.com/in/antriksharya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    linkedin.com/in/antriksharya
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border rounded-lg bg-white dark:bg-gray-900 shadow-sm">
                <Github className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-medium">GitHub</div>
                  <a
                    href="https://github.com/vdhkcheems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    github.com/vdhkcheems
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border rounded-lg bg-white dark:bg-gray-900 shadow-sm">
                <Award className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-medium">Kaggle</div>
                  <a
                    href="https://kaggle.com/antriksharya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    kaggle.com/antriksharya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-white dark:bg-gray-950 dark:border-gray-800">
        <div className="container text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Antriksh Arya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
