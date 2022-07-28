import { Card, CardImg } from "reactstrap";
import "./Footer.css";

// Vinayak: Renders Footer with logo
export function Footer() {
    const styles: {} = {
        position: "fixed",
        bottom: "0px",
        borderRadius: "0px",
    };

    return (
        <Card
            data-testid="footer"
            className="footer"
            style={styles}
            color="dark"
        >
            <div className="img-container">
                <CardImg
                    alt="Card image cap"
                    bottom
                    src="./dnd-logo-footer.png"
                />
            </div>
        </Card>
    );
}
