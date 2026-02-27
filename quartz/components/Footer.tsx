import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? {}

    const socialIcons: Record<string, string> = {
      YouTube: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
      Patreon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2V21.6z"/></svg>`,
    }

    return (
      <footer class={`${displayClass ?? ""} tl-footer`}>
        <div class="tl-footer-brand">
          <img
            src="https://yt3.ggpht.com/ZzVyDrXt4x8YWoKbISHZzC9CCtkEPCN4GRET1Xxf_wssNyw7mfN-xTbBmpwEJHO0DRQrg0Dgug=s68-c-k-c0x00ffffff-no-rj"
            alt="Terapia Liberal"
            class="tl-footer-logo"
          />
          <span class="tl-footer-name">Terapia Liberal</span>
        </div>
        <div class="tl-footer-links">
          {Object.entries(links).map(([text, link]) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              class={`tl-social-link tl-social-${text.toLowerCase()}`}
              aria-label={text}
            >
              <span
                class="tl-social-icon"
                dangerouslySetInnerHTML={{ __html: socialIcons[text] ?? "" }}
              />
              <span class="tl-social-text">{text}</span>
            </a>
          ))}
        </div>
        <p class="tl-footer-copy">
          © {year} Terapia Liberal. Análisis independiente para mentes críticas.
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
