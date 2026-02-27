import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? "Terapia Liberal"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="tl-brand-link">
        <img
          src="https://yt3.ggpht.com/ZzVyDrXt4x8YWoKbISHZzC9CCtkEPCN4GRET1Xxf_wssNyw7mfN-xTbBmpwEJHO0DRQrg0Dgug=s68-c-k-c0x00ffffff-no-rj"
          alt=""
          class="tl-brand-logo"
        />
        <span class="tl-brand-name">{title}</span>
      </a>
    </div>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
  padding: 0;
}

.tl-brand-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none !important;
  line-height: 1;
}

.tl-brand-logo {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  display: block;
}

.tl-brand-name {
  color: #d4af37;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.01em;
  line-height: 1;
  transition: color 300ms ease-in-out;
}

.tl-brand-link:hover .tl-brand-name {
  color: #e8c84a;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
