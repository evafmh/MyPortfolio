import { Link } from 'react-router-dom'
import './../sassStyles/pages/_error-page.sass'

function ErrorPage() {
    return (
        <main>
            <div className="error404-container">
                <h1 className="error-title">404</h1>
                <div className="error-messages">
                    <span className="error404-message">
                        Oups! La page que vous demandez n'existe pas.
                    </span>
                    <span className="error404-message">
                        "Oops! The page you are requesting does not exist."
                    </span>
                </div>
                <Link
                    className="error404-home-link"
                    to="/"
                    aria-label="Go back to the homepage"
                >
                    Retourner sur la page d’accueil <br /> Go back to the
                    homepage
                </Link>
            </div>
        </main>
    )
}

export default ErrorPage
