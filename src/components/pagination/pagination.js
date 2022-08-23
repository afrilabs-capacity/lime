import { useState, useEffect } from "react";
export default function Pagination({ pagination, doPagination }) {
  const [active, setActive] = useState(1);
  const [offset, setOffset] = useState(0);

  const changePage = (page) => {
    pagination.current_page = page;
    doPagination(page);
    // this.$emit("paginate", page);
  };

  const getPagingRange = (current, min, total, length) => {
    if (length > total) length = total;
    let start = current - Math.floor(length / 2);
    start = Math.max(start, min);
    start = Math.min(start, min + total - length);
    return Array.from({ length: length }, (el, i) => start + i);
  };

  const pagesNumber = () => {
    if (!pagination.to) {
      return [];
    }
    let from = pagination.current_page - 1;
    if (from < 1) {
      from = 1;
    }
    let to = from + offset * 2;
    if (to >= pagination.last_page) {
      to = pagination.last_page;
    }
    let pagesArray = [];
    let allp = pagination.total / pagination.per_page;
    for (let page = from; page < Math.round(allp) + 1; page++) {
      pagesArray.push(page);
    }
    return getPagingRange(pagination.current_page, 1, Math.round(allp), 5);
    //   this.getPageList(
    //     Math.round(allp),
    //     this.pagination.current_page,
    //     5
    //   );
    //return pagesArray;
  };

  useEffect(() => {}, []);

  return (
    <>
      {pagesNumber().length > 0 && (
        <ul class="pagination flex mt-5 justify-end">
          {pagination.current_page > 1 && (
            <li>
              <a
                href={void 0}
                aria-label="Previous cursor-pointer"
                onClick={() => changePage(pagination.current_page - 1)}
              >
                <span aria-hidden="true" class="text-black cursor-pointer">
                  «
                </span>
              </a>
            </li>
          )}

          {pagesNumber().map((page) => {
            return (
              <li>
                <a
                  href={void 0}
                  className={` ${
                    page == pagination.current_page
                      ? "active cursor-pointer rounded-full bg-sky-900 p-2 px-3 text-white"
                      : "cursor-pointer rounded-full  p-2 px-3 border border-gray-300"
                  } `}
                  onClick={() => changePage(page)}
                >
                  {page}
                </a>
              </li>
            );
          })}

          {pagination.current_page < pagination.last_page && (
            <li>
              <a
                href={void 0}
                class="text-black"
                aria-label="Next cursor-pointer"
                onClick={() => changePage(pagination.current_page + 1)}
              >
                <span aria-hidden="true" class="text-black cursor-pointer">
                  »
                </span>
              </a>
            </li>
          )}
        </ul>
      )}
    </>
  );
}
