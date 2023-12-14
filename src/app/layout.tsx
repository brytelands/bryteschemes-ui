import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.scss'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'BryteSchemes',
    description: 'Get your account data - easy',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <div className="container hero is-fullheight">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://brytelands.io">
                        <img src="./favicon-32x32.png" width="32" height="32"/>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/">
                            Home
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Discriminators
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item" href="/discriminator-offline">
                                    Discriminators Offline
                                </a>
                                <a className="navbar-item" href="/discriminator">
                                    Discriminators On-Chain
                                </a>
                            </div>
                        </div>

                        <a className="navbar-item" href="https://github.com/brytelands">
                            Documentation
                        </a>

                        <a className="navbar-item" target="_blank" rel="noopener noreferrer"
                           href={process.env.NEXT_PUBLIC_BRYTE_DESCRIPTION_SWAGGER}>
                            API
                        </a>

                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="select">
                                <select id="solana_env">
                                    <option value="Dev">devnet</option>
                                    <option value="Test">testnet</option>
                                    <option value="Main">mainnet</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>

            <div className={inter.className}>{children}</div>

            <footer className="has-text-centered is-flex-align-items-flex-end mt-auto">
                <div className="content has-text-centered">
                    <p>
                        <strong>BryteSchemes</strong> by <a href="https://brytelands.com">Will Kennedy</a>. The source
                        code is licensed <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a>. The website content
                        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                    </p>
                </div>
            </footer>
        </div>
        </body>
        </html>
    )
}
