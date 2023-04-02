import { SearchItemImg, SearchItemLink, SearchItemTitle, SearchItemPrice } from "./styles";

export default function SearchItem({ item }) {
    return (
        <SearchItemLink to={`product/${item.id}`}>
            <SearchItemImg src={item.imageUrl} alt={item.title} />
            <SearchItemTitle>{item.title}</SearchItemTitle>
            <SearchItemPrice>Price: USD {item.discountedPrice}</SearchItemPrice>
        </SearchItemLink>
    )
}