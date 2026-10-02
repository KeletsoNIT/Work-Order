
import './App.css'

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Work-Order</h2>

        <nav>
          <button>Dashboard</button>
          <button>Work Orders</button>
          <button>Settings</button>
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <h1>Dashboard</h1>
            <p>Manage and track your work orders.</p>
          </div>

          <button className="new-order-button">
            + New Work Order
          </button>
        </header>

        <section className="stats">
          <div className="stat-card">
            <span>Open</span>
            <strong>12</strong>
          </div>

          <div className="stat-card">
            <span>In Progress</span>
            <strong>7</strong>
          </div>

          <div className="stat-card">
            <span>Completed</span>
            <strong>24</strong>
          </div>

          <div className="stat-card">
            <span>Total</span>
            <strong>43</strong>
          </div>
        </section>

        <section className="orders-section">
          <div className="section-header">
            <div>
              <h2>Recent Work Orders</h2>
              <p>Latest work orders in the system.</p>
            </div>

            <button className="view-all-button">
              View All
            </button>
          </div>

          <div className="orders-table">
            <div className="table-header">
              <span>ID</span>
              <span>Description</span>
              <span>Priority</span>
              <span>Status</span>
            </div>

            <div className="table-row">
              <span>WO-001</span>
              <span>Server repair</span>
              <span className="priority high">High</span>
              <span className="status open">Open</span>
            </div>

            <div className="table-row">
              <span>WO-002</span>
              <span>Laptop replacement</span>
              <span className="priority medium">Medium</span>
              <span className="status progress">In Progress</span>
            </div>

            <div className="table-row">
              <span>WO-003</span>
              <span>Network issue</span>
              <span className="priority high">High</span>
              <span className="status completed">Completed</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

