import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import getSpellDetails from "../services/spellDetailService";
import { Spinner, Button } from "reactstrap";
import { SpellDetailState } from "../types/SpellDetailState";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourites } from "../features/spell/spellSlice";

import {
    addToFavourite,
    removeFromfavourite,
} from "../features/spell/spellSlice";

import "./SpellInfo.css";
import { SpellInfoDetail } from "../components/spell/SpellInfoDetail";

// Vinayak: Renders all the information related to clicked spell
export function SpellInfo() {
    let { index } = useParams();

    const [spellDetails, setSpellDetails] = useState<SpellDetailState | null>(
        {} as SpellDetailState
    );

    const [spellSchool, setSpellSchool] = useState<string | undefined>(
        `./magic_school/abjuration.png`
    );

    const [spellClass, setSpellClass] = useState<string | undefined>(
        `./class/barbarian.png`
    );
    const favSpells = useSelector(selectFavourites);
    const dispatch = useDispatch();

    let isFavourite = () => {
        if (spellDetails)
            return (
                favSpells.findIndex(
                    (it: { index: string }) => it.index === spellDetails.index
                ) >= 0
            );
        else return false;
    };

    const bookMarkHandler = () => {
        if (isFavourite() && spellDetails) {
            dispatch(removeFromfavourite(spellDetails.index));
        } else {
            if (spellDetails) dispatch(addToFavourite(spellDetails));
        }
    };

    const loadSpellInfo = useCallback(
        () =>
            getSpellDetails(index).then((response) => {
                if (!response.error) {
                    setSpellDetails(response);
                    setSpellSchool(
                        `../magic_school/${response.school.index}.png`
                    );
                    setSpellClass(`../class/${response.classes[0].index}.png`);
                } else {
                    setSpellDetails(null);
                    setSpellSchool(`../magic_school/abjuration.png`);
                    setSpellClass(`../class/barbarian.png`);
                }
            }),
        [index]
    );

    useEffect(() => {
        loadSpellInfo();
    }, [index, loadSpellInfo]);

    if (!spellDetails) {
        return (
            <div className="main">
                <div className="spell-detail">
                    <div
                        data-testid="spell-detail-not-found"
                        className="spell-detail-not-found"
                    >
                        Spell Not Found!
                    </div>
                </div>
            </div>
        );
    }

    if (spellDetails && !spellDetails.name) {
        return (
            <div className="main">
                <div className="spell-detail">
                    <Spinner size="sm">Loading...</Spinner>
                    <span
                        data-testid="loading"
                        className="spell-detail-not-found px-2"
                    >
                        Loading...
                    </span>
                </div>
            </div>
        );
    }

    const reqDetails = [
        "level",
        "components",
        "duration",
        "casting_time",
        "range",
        "attack_type",
    ];

    return (
        <div className="main">
            <div className="spell-detail m-auto" data-testid="spell-info">
                <div className="spell-heading d-flex flex-column flex-md-row align-items-center justify-content-evenly">
                    <div className="spell-header display-1 p-3 d-flex ">
                        {spellDetails.name}
                    </div>
                    <div className="add-to-fav">
                        {isFavourite() ? (
                            <Button
                                style={{ width: "200px" }}
                                onClick={bookMarkHandler}
                            >
                                Remove from favourite
                            </Button>
                        ) : (
                            <Button
                                color="secondary"
                                style={{ width: "200px" }}
                                onClick={bookMarkHandler}
                            >
                                Add to favourites
                            </Button>
                        )}
                    </div>
                </div>
                <hr></hr>
                <div className="spell-details row">
                    {Object.entries(spellDetails).map((key) =>
                        reqDetails.includes(key[0].toString()) ? (
                            <SpellInfoDetail
                                heading={
                                    key[0].toString().charAt(0).toUpperCase() +
                                    key[0]
                                        .toString()
                                        .slice(1)
                                        .replaceAll("_", " ")
                                }
                                detail={key[1].toString()}
                            />
                        ) : null
                    )}

                    <SpellInfoDetail
                        heading="School"
                        detail={spellDetails.school["name"]}
                    />

                    {spellDetails?.damage?.damage_type.name !== undefined ? (
                        <SpellInfoDetail
                            heading="Damage"
                            detail={spellDetails?.damage?.damage_type.name}
                        />
                    ) : null}
                </div>
                <hr></hr>
                <div
                    data-testid="spell-detail-container"
                    className="spell-detail-description row"
                >
                    <div className="galary col-12 col-md-6 col-xl-4">
                        <div className="school text-center">
                            <img
                                src={spellSchool}
                                alt="school logo"
                                width="220px"
                            />
                            <div className="text-muted">
                                {spellDetails.school.index}
                            </div>
                        </div>

                        <div className="class text-center">
                            <img
                                src={spellClass}
                                alt="class logo"
                                width="220px"
                            />
                            <div className="text-muted">
                                {spellDetails.classes[0].name}
                            </div>
                        </div>
                    </div>
                    <div className="text col-12 col-md-6 col-xl-8">
                        <p>{spellDetails.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
