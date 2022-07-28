import { Link } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import {
    addToFavourite,
    removeFromfavourite,
} from "../../features/spell/spellSlice";
import { SpellState } from "../../types/SpellState";

import "./SpellListItem.css";

type SpellListItemProp = {
    spell: SpellState;
    isFavourite: boolean;
    updateSpells?: () => void;
};

// Vinayak: Renders each item spell name with link to detail inside spell lists
export function SpellListItem(props: SpellListItemProp) {
    const dispatch = useDispatch();
    let spell = props.spell;
    let isFavourite = props.isFavourite;

    const bookMarkHandler = () => {
        if (isFavourite) {
            dispatch(removeFromfavourite(spell.index));
        } else {
            dispatch(addToFavourite(spell));
            if (props.updateSpells) {
                props.updateSpells();
            }
        }
    };

    return (
        <div className="spell-li">
            <Link className="spell-name" to={"/spell/" + spell.index}>
                {spell.name}
            </Link>
            {isFavourite ? (
                <StarFill
                    className="fav-icon"
                    color="gold"
                    onClick={bookMarkHandler}
                />
            ) : (
                <Star
                    className="fav-icon"
                    color="gray"
                    onClick={bookMarkHandler}
                />
            )}
        </div>
    );
}
