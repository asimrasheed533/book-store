import { TableEntryDeleteButton, TableEntryText } from "components";

import Loading from "../../../layouts/loading";
import { Search } from "react-feather";
import axios from "../../../utils/axios";
import useQuery from "../../../utils/useQuery";

export default function orders() {
  const {
    data: response = {},
    isLoading: loading,
    mutate,
  } = useQuery("orders");
  const order = response.data || [];
  console.log("response", response);

  return (
    <div className="container__main__content__listing">
      <div className="container__main__content__listing__header">
        <div className="container__main__content__listing__header__left">
          <form className="container__main__content__listing__header__left__search">
            <input
              type="text"
              placeholder="Search"
              className="container__main__content__listing__header__left__search__field"
            />
            <button className="container__main__content__listing__header__left__search__button">
              <Search size={20} color="currentColor" />
            </button>
          </form>
        </div>
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div className="container__main__content__listing__table__header__entry">
            Actions
          </div>

          <div className="container__main__content__listing__table__header__entry">
            Book ID
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Email
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Student name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Phone No.
          </div>
        </div>
        <div className="container__main__content__listing__table__content">
          {loading ? (
            <Loading dashboard />
          ) : (
            response.map((item) => (
              <TableEntry item={item} key={item.id} getData={mutate} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function TableEntry({ item }) {
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        <TableEntryDeleteButton
          onClick={() => {
            axios.delete(`orders/${item?.id}`).then(() => getData);
          }}
        />
      </div>

      <TableEntryText>{item.id}</TableEntryText>
      <TableEntryText>{item?.email}</TableEntryText>
      <TableEntryText>{item?.firstName}</TableEntryText>
      <TableEntryText>{item?.number}</TableEntryText>
    </div>
  );
}
