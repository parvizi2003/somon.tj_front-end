export function addToFavourites(e, id) {
    e.preventDefault()
};
export function formattedNum(num) {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}