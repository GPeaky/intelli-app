import './index.css'
import { IconMinus, IconSquare, IconX } from '@tabler/icons-solidjs'
import { getCurrent } from '@tauri-apps/api/window'

const TitleBar = () => {
    const appWindow = getCurrent()

    return (
        <div data-tauri-drag-region class="titlebar">
            <div class="titlebar-button" onClick={() => appWindow.minimize()} >
                <IconMinus size={14} />
            </div>
            <div class="titlebar-button" onClick={() => appWindow.toggleMaximize()}>
                <IconSquare size={12} />
            </div>
            <div class="titlebar-button" onClick={() => appWindow.close()}>
                <IconX size={14} />
            </div>
        </div>
    )
}

export default TitleBar;