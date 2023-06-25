import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div className="error404-container">
            <h1 className="error-title">Erreur 404</h1>
            <span className="error404-message">
                Oups! La page que vous demandez n'existe pas.
            </span>
            <Link className="error404-home-link" to="/">
                Retourner sur la page d’accueil
            </Link>
        </div>
    )
}

export default ErrorPage
