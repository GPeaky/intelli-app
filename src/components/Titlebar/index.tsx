import { getCurrent } from '@tauri-apps/api/window'
import { IconMinus, IconSquare, IconX } from '@tabler/icons-solidjs'

const TitleBar = () => {
    const appWindow = getCurrent()

    return (
        <div data-tauri-drag-region class="h-5 bg-neutral-800 select-none flex justify-end fixed inset-0">
            <div class="inline-flex justify-center items-center p-1 hover:bg-neutral-700" onClick={() => appWindow.minimize()} >
                <IconMinus class='text-neutral-400' size={14} />
            </div>
            <div class="inline-flex justify-center items-center p-1 hover:bg-neutral-700" onClick={() => appWindow.toggleMaximize()}>
                <IconSquare class='text-neutral-400' size={12} />
            </div>
            <div class="inline-flex justify-center items-center p-1 hover:bg-red-600" onClick={() => appWindow.close()}>
                <IconX class='text-neutral-400' size={14} />
            </div>
        </div>
    )
}

export default TitleBar;