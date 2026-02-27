import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? "Terapia Liberal"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="tl-brand-link">
        <img
          src="https://yt3.ggpht.com/ZzVyDrXt4x8YWoKbISHZzC9CCtkEPCN4GRET1Xxf_wssNyw7mfN-xTbBmpwEJHO0DRQrg0Dgug=s68-c-k-c0x00ffffff-no-rj"
          alt="Terapia Liberal"
          class="tl-brand-logo"
        />
        <span class="tl-brand-name">{title}</span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.tl-brand-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none !important;
}

.tl-brand-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid rgba(212, 175, 55, 0.4);
  transition: border-color 300ms ease-in-out;
}

.tl-brand-link:hover .tl-brand-logo {
  border-color: #d4af37;
}

.tl-brand-name {
  color: #d4af37;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 0.02em;
  transition: color 300ms ease-in-out;
}

.tl-brand-link:hover .tl-brand-name {
  color: #e8c84a;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
