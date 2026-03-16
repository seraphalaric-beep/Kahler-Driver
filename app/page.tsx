import KahlerQuiz from '@/components/KahlerQuiz'

export default function Home() {
  return (
    <main className="container">
      <h1 className="page-title">
        Kahler Driver Questionnaire
      </h1>
      <p className="page-subtitle">
        Drivers are unconscious internal pressures that make us do things certain ways. Answer honestly to discover your primary driver.
      </p>
      <KahlerQuiz />
    </main>
  )
}
