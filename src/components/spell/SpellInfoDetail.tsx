import "./SpellInfoDetail.css";

type SpellInfoDetailProps = {
    heading: string;
    detail: string;
};

// Vinayak: Renders small spell information blocks
export function SpellInfoDetail(props: SpellInfoDetailProps) {
    return (
        <div
            data-testid="spellInfoDetail"
            className="detail col-6 col-md-4 col-lg-3"
        >
            <div className="detail_heading">{props.heading}</div>
            <div className="detail_value">{props.detail}</div>
        </div>
    );
}
