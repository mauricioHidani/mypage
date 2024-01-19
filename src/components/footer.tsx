import { data as footer } from "@/data/footerData";

export default function Footer({}: {}) {
    return(
        <div
            className="
                flex 
                flex-col 
                items-center 
                justify-center 
                py-5 
                text-center 
                bg-color-1th 
                text-sm 
                text-color-4th   
            "
        >
            <div
                className="
                    flex 
                    flex-row 
                    gap-1 
                "
            >
                <span>{ footer.since }</span>
                <span>&#45;</span>
                <span>{ footer.local }</span>
            </div>
            <div
                className="
                    flex 
                    gap-1 
                "
            >
                <span>created by</span>
                <span>{ footer.author }</span>
            </div>
            <div
                className="
                    flex 
                    gap-2
                "
            >
                <span>{ footer.version }</span>
                <span>version</span>
            </div>
        </div>
    );
}
