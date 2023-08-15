import { Section, Navbar, Sidebar } from './components/index'

const App = () => {
  return (
    <main className="main">
      <Navbar />
      <Sidebar />
      <section className="all-sections-container">
        <Section />
      </section>
    </main>
  )
}
export default App
