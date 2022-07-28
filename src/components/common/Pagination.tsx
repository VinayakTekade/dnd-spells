import { useState } from "react";

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "./Pagination.css";

type PaginationProps = {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

// Vinayak: Renders pagination buttons that switches between pages on click
export function PaginationB(props: PaginationProps) {
    const [currentPage, setCurrentPage] = useState(props.page);
    const totalPages = props.totalPages;

    let pageLimit: number;
    window.innerWidth <= 500 ? (pageLimit = 3) : (pageLimit = 6);

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(
            totalPages - start >= pageLimit ? pageLimit : totalPages - start
        )
            .fill(0)
            .map((_, idx) => start + idx + 1);
    };

    const pageClickHandler = (page: number) => {
        if (page === currentPage) {
            return;
        }
        setCurrentPage(page);
        props.onPageChange(page);
    };

    return (
        <Pagination data-testid="pagination">
            <PaginationItem key="first">
                <PaginationLink
                    first
                    href="#"
                    onClick={() => {
                        pageClickHandler(1);
                    }}
                    disabled={currentPage === 1}
                    className={`prev ${currentPage === 1 ? "disabled" : ""}`}
                />
            </PaginationItem>
            <PaginationItem key="previous">
                <PaginationLink
                    href="#"
                    previous
                    onClick={() => {
                        pageClickHandler(currentPage - 1);
                    }}
                    disabled={currentPage === 1}
                    className={`prev ${currentPage === 1 ? "disabled" : ""}`}
                />
            </PaginationItem>
            {getPaginationGroup().map((item, index) => (
                <PaginationItem key={index}>
                    <PaginationLink
                        href="#"
                        key={index}
                        onClick={() => {
                            pageClickHandler(item);
                        }}
                        className={`paginationItem ${
                            currentPage === item ? "active" : null
                        }`}
                    >
                        {item}
                    </PaginationLink>
                </PaginationItem>
            ))}

            <PaginationItem key="next">
                <PaginationLink
                    href="#"
                    next
                    onClick={() => {
                        pageClickHandler(currentPage + 1);
                    }}
                    disabled={currentPage === totalPages}
                    className={`next ${
                        currentPage === totalPages ? "disabled" : ""
                    }`}
                />
            </PaginationItem>
            <PaginationItem key="last">
                <PaginationLink
                    href="#"
                    last
                    onClick={() => {
                        pageClickHandler(totalPages);
                    }}
                    disabled={currentPage === totalPages}
                    className={`next ${
                        currentPage === totalPages ? "disabled" : ""
                    }`}
                />
            </PaginationItem>
        </Pagination>
    );
}
