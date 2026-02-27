import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? {}

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
            >
              {text}
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
