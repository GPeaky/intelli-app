import './index.css'
import { IconMinus, IconSquare, IconX } from '@tabler/icons-solidjs'
import { appWindow } from '@tauri-apps/api/window'

const TitleBar = () => {
    const minimize = () => {
        appWindow.minimize()
    }

    const maximize = () => {
        appWindow.toggleMaximize()
    }

    const close = () => {
        appWindow.close()
    }

    return (
        <div data-tauri-drag-region class="titlebar">
            <div class="titlebar-button" onClick={minimize} >
                <IconMinus size={14} />
            </div>
            <div class="titlebar-button" onClick={maximize}>
                <IconSquare size={12} />
            </div>
            <div class="titlebar-button" onClick={close}>
                <IconX size={14} />
            </div>
        </div>
    )
}

export default TitleBar;