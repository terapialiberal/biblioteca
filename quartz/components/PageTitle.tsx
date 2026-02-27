import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="tl-brand-link">
        <img
          src="https://yt3.ggpht.com/ZzVyDrXt4x8YWoKbISHZzC9CCtkEPCN4GRET1Xxf_wssNyw7mfN-xTbBmpwEJHO0DRQrg0Dgug=s68-c-k-c0x00ffffff-no-rj"
          alt=""
          class="tl-brand-logo"
        />
        <div class="tl-brand-text">
          <span class="tl-brand-name">{title}</span>
          <span class="tl-brand-sub">Base de Datos</span>
        </div>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  padding: 0;
  font-family: var(--titleFont);
}

.tl-brand-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none !important;
}

.tl-brand-logo {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  display: block;
}

.tl-brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.tl-brand-name {
  color: #d4af37;
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 0.01em;
  line-height: 1.2;
  transition: color 300ms ease-in-out;
}

.tl-brand-sub {
  color: #9ca3af;
  font-weight: 400;
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1;
}

.tl-brand-link:hover .tl-brand-name {
  color: #e8c84a;
}

.tl-brand-link:hover .tl-brand-sub {
  color: #d4af37;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
