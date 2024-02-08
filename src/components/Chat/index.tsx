"use client"

import { useState } from "react"

// import * as S from "./styles"

export function Chat() {

    const [chatOpen, setChatOpen] = useState(false)

    function ChatOpener() {
        console.log(!chatOpen);

        setChatOpen(!chatOpen)
    }

    return (
        <>
            <button onClick={ChatOpener}>
                <span >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px" y="0px" viewBox="0 0 15 16"
                        xmlSpace="preserve"
                        aria-hidden="true">
                        <path
                            d="M1.3,16c-0.7,0-1.1-0.3-1.2-0.8c-0.3-0.8,0.5-1.3,0.8-1.5c0.6-0.4,0.9-0.7,1-1c0-0.2-0.1-0.4-0.3-0.7c0,0,0-0.1-0.1-0.1 C0.5,10.6,0,9,0,7.4C0,3.3,3.4,0,7.5,0C11.6,0,15,3.3,15,7.4s-3.4,7.4-7.5,7.4c-0.5,0-1-0.1-1.5-0.2C3.4,15.9,1.5,16,1.5,16 C1.4,16,1.4,16,1.3,16z M3.3,10.9c0.5,0.7,0.7,1.5,0.6,2.2c0,0.1-0.1,0.3-0.1,0.4c0.5-0.2,1-0.4,1.6-0.7c0.2-0.1,0.4-0.2,0.6-0.1 c0,0,0.1,0,0.1,0c0.4,0.1,0.9,0.2,1.4,0.2c3,0,5.5-2.4,5.5-5.4S10.5,2,7.5,2C4.5,2,2,4.4,2,7.4c0,1.2,0.4,2.4,1.2,3.3 C3.2,10.8,3.3,10.8,3.3,10.9z">
                        </path>
                    </svg>
                </span>
                <span>
                    Chat
                </span>
            </button>


            <iframe>
                <div>
                    <header data-testid="widget-header-view" >
                        <div >
                            <h1 data-testid="widget-title" id="widgetHeaderTitle" >
                                Chat com o Pagar.me
                            </h1>
                            <button data-garden-id="buttons.icon_button" data-garden-version="8.13.0" type="button" aria-label="Minimizar widget" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false" viewBox="0 0 16 16" data-testid="Icon--dash" data-garden-id="buttons.icon" data-garden-version="8.13.0" >
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 8h10">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </header>
                    <form data-testid="support-ticket-form" aria-labelledby="widgetHeaderTitle" >
                        <main data-testid="scroll-container-content" aria-live="polite" >
                            <div data-testid="form-greeting-msg" >
                                <span >Olá! Tudo bom? Como podemos te ajudar hoje?

                                    Já temos diversas dúvidas frequentes respondidas! Que tal conhecer nossa Central de Ajuda e nossa Documentação? 🙂

                                    Central de Ajuda:
                                    <a href="https://pagarme.helpjuice.com/" target="_blank">https://pagarme.helpjuice.com/</a>
                                    Documentação:
                                    <a href="https://docs.pagar.me/" target="_blank">https://docs.pagar.me/</a>

                                </span>
                            </div>
                            <div >
                                <div>
                                    <div data-garden-id="forms.field" data-garden-version="8.49.4">
                                        <label data-garden-id="forms.input_label" data-garden-version="8.49.4" id="45val-field_1.3.10--label" data-garden-container-id="containers.field" data-garden-container-version="1.3.10" data-fieldid="name" >
                                            <div>
                                                <strong>Nome</strong>
                                            </div>
                                        </label>
                                        <input data-garden-id="forms.input" data-garden-version="8.49.4" aria-invalid="false" id="45val-field_1.3.10--input" aria-labelledby="45val-field_1.3.10--label" aria-describedby="45val-field_1.3.10--hint" name="name" required={true} type="text" />
                                    </div>
                                </div>
                                <div>
                                    <div >
                                        <p>Ou entrar usando uma rede social:</p>
                                        <button data-garden-id="buttons.icon_button" data-garden-version="8.13.0" type="button" title="facebook" >
                                            <desc>Created with Sketch.</desc>
                                            <defs></defs>
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-1.000000, -49.000000)" fill-rule="nonzero" fill="#000000">
                                                    <g transform="translate(1.000000, 49.000000)">
                                                        <path d="M875,0 L125,0 C56.25,0 0,56.25 0,125 L0,875 C0,943.75 56.25,1000 125,1000 L875,1000 C943.75,1000 1000,943.75 1000,875 L1000,125 C1000,56.25 943.75,0 875,0 Z M824.875,562.5 L687.5,562.5 L687.5,937.5 L562.5,937.5 L562.5,562.5 L437.5,562.5 L437.5,437.5 L562.5,437.5 C562.5,437.5 562.5,382.125 562.5,323.375 C562.5,234.5 605,152.875 737.313,152.875 C790.751,152.875 830.438,158.063 830.438,158.063 L827.25,281.626 C827.25,281.626 786.875,281.251 742.75,281.251 C695,281.251 687.375,303.251 687.375,339.751 C687.375,345.189 687.375,346.376 687.375,345.876 C687.375,355.814 687.375,375.064 687.375,437.564 L831,437.564 L824.875,562.5 Z">
                                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                            {/* </svg> */}
                                        </button>
                                        <button data-garden-id="buttons.icon_button" data-garden-version="8.13.0" type="button" title="google" >
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" data-testid="Icon--google" data-garden-id="buttons.icon" data-garden-version="8.13.0" >
                                                <defs>
                                                    <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z">
                                                    </path>
                                                </defs><clipPath id="b">
                                                    <use xlinkHref="#a" overflow="visible">
                                                    </use></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z">
                                                </path>
                                                <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z">
                                                </path>
                                                <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z">
                                                </path>
                                                <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div data-garden-id="forms.field" data-garden-version="8.49.4" >
                                        <label data-garden-id="forms.input_label" data-garden-version="8.49.4" id="46val-field_1.3.10--label" data-garden-container-id="containers.field" data-garden-container-version="1.3.10" data-fieldid="email" >
                                            <div>
                                                <strong>E-mail</strong>
                                            </div>
                                        </label>
                                        <input data-garden-id="forms.input" data-garden-version="8.49.4" aria-invalid="false" id="46val-field_1.3.10--input" aria-labelledby="46val-field_1.3.10--label" aria-describedby="46val-field_1.3.10--hint" name="email" required={false} type="email" />
                                    </div>
                                </div>
                                <div>
                                    <div role="presentation" >
                                        <div data-garden-id="forms.field" data-garden-version="8.49.4" >
                                            <label data-garden-id="forms.input_label" data-garden-version="8.49.4" id="downshift-2-label" data-garden-container-id="containers.field" data-garden-container-version="1.3.10" data-fieldid="department" >
                                                <div>
                                                    <strong>Escolha um departamento</strong>
                                                </div>
                                            </label>
                                            <div data-garden-id="dropdowns.faux_input" data-garden-version="8.49.4" aria-invalid="false" role="button" aria-haspopup="true" data-toggle="true" data-testid="dropdown-field" >
                                                <div data-garden-id="dropdowns.select" data-garden-version="8.49.4" >-</div>
                                                <input data-garden-id="dropdowns.input" data-garden-version="8.49.4" aria-invalid="false" id="downshift-2-input" aria-labelledby="downshift-2-label" aria-describedby="47val-field_1.3.10--hint" aria-autocomplete="list" value="" />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false" viewBox="0 0 16 16" aria-hidden="true" data-garden-id="forms.media_figure" data-garden-version="8.49.4">
                                                    <path fill="currentColor" d="M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div data-garden-id="dropdowns.menu_wrapper" data-garden-version="8.49.4" >
                                            <ul data-garden-id="dropdowns.menu" data-garden-version="8.49.4" role="listbox" aria-labelledby="downshift-2-label" id="downshift-2-menu" data-testid="dropdown-options">
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div data-garden-id="forms.field" data-garden-version="8.49.4" >
                                        <label data-garden-id="forms.input_label" data-garden-version="8.49.4" id="48val-field_1.3.10--label" data-garden-container-id="containers.field" data-garden-container-version="1.3.10" data-fieldid="message" >
                                            <div>
                                                <strong>Mensagem</strong> (opcional)
                                            </div>
                                        </label>
                                        <textarea data-garden-id="forms.textarea" data-garden-version="8.49.4" aria-invalid="false" id="48val-field_1.3.10--input" aria-labelledby="48val-field_1.3.10--label" aria-describedby="48val-field_1.3.10--hint" name="message">
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div data-fieldid="FINAL_FORM/form-error">
                            </div>
                        </main>
                        <footer >
                            <div >
                                <a data-testid="Icon--zendesk" href="https://www.zendesk.com.br/embeddables/?utm_source=webwidget&amp;utm_medium=poweredbyzendesk&amp;utm_campaign=image" target="_blank" >
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 624.47 119.59">
                                        <title>zendesk</title>
                                        <defs>
                                            {/* <style>.cls-1{fill:#03363d;}</style> */}
                                        </defs>
                                        <path d="M2014.78,120.15A31.34,31.34,0,0,0,2037,111.5l11,11.91c-7.3,7.49-17.4,13.07-33.12,13.07-26.95,0-44.35-17.86-44.35-42.07,0-24,18.34-42.07,41.91-42.07,26.76,0,41.91,20.36,40.61,48.6H1989.9c2.24,11.72,10.48,19.21,24.88,19.21m19.27-32.65c-1.68-10.95-8.23-19-21.33-19-12.16,0-20.58,6.91-22.83,19h44.16Z" transform="translate(-1599.52 -16.89)">
                                        </path>
                                        <path d="M0 102.38 48.68 52.94 1.14 52.94 1.14 37.42 71.24 37.42 71.24 53.26 22.56 102.7 71.89 102.7 71.89 118.22 0 118.22 0 102.38z">
                                        </path>
                                        <path d="M1726.05,120.15a31.34,31.34,0,0,0,22.27-8.65l11,11.91c-7.3,7.49-17.4,13.07-33.12,13.07-26.95,0-44.35-17.86-44.35-42.07,0-24,18.34-42.07,41.91-42.07,26.76,0,41.91,20.36,40.61,48.6h-63.24c2.24,11.72,10.48,19.21,24.88,19.21m19.27-32.65c-1.68-10.95-8.23-19-21.33-19-12.16,0-20.58,6.91-22.83,19h44.16Z" transform="translate(-1599.52 -16.89)">
                                        </path>
                                        <path d="M1869.51,94.46c0-25.86,19.31-42,40.56-42,10.71,0,20.94,4.69,26.94,12.13V16.89h17.21v118H1937V123.71c-6.16,7.92-16.39,12.77-27.1,12.77-20.6,0-40.4-16.32-40.4-42m68.48-.16c0-14.38-10.87-26.18-25.64-26.18-14.44,0-25.64,11.47-25.64,26.18s11.19,26.34,25.64,26.34c14.77,0,25.64-11.8,25.64-26.34" transform="translate(-1599.52 -16.89)">
                                        </path>
                                        <path d="M2064.34,117.73l15.57-8.08a23.12,23.12,0,0,0,20.77,11.79c9.74,0,14.77-5,14.77-10.66,0-6.46-9.41-7.92-19.63-10-13.8-2.91-28.07-7.44-28.07-24.08,0-12.77,12.17-24.57,31.32-24.4,15.09,0,26.29,6,32.62,15.67l-14.44,7.92c-3.73-5.66-10.06-9.21-18.17-9.21-9.25,0-14,4.53-14,9.7,0,5.82,7.46,7.43,19.15,10,13.3,2.91,28.39,7.27,28.39,24.08,0,11.15-9.73,26.18-32.78,26-16.87,0-28.72-6.79-35.53-18.75" transform="translate(-1599.52 -16.89)">
                                        </path>
                                        <path d="M579.84 82.1 566.21 96.96 566.21 117.97 549.01 117.97 549.01 0 566.21 0 566.21 77.25 602.72 37.17 623.65 37.17 592.01 71.75 624.47 117.97 604.99 117.97 579.84 82.1z">
                                        </path>
                                        <path d="M1817.53,52.42c-20.45,0-37.57,13.25-37.57,35.23v47.2h17.53v-45c0-13.25,7.62-21.18,20.6-21.18s19.48,7.93,19.48,21.18v45h17.53V87.65c0-22-17.12-35.23-37.57-35.23" transform="translate(-1599.52 -16.89)">
                                        </path>
                                    </svg>
                                </a>
                                <button data-garden-id="buttons.button" data-garden-version="8.13.0" type="submit" data-testid="button-ok" >
                                    Iniciar chat
                                </button>
                            </div>
                        </footer>
                    </form>
                </div>
            </iframe>
        </>
    )
}