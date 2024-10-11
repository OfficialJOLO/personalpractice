//

let offset = currentPage - 1;

let sql = "SELECT * FROM books";
let values = [];
if (category_id && news) {
  sql +=
    "WHERE category_id = ? AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1MONTH AND NOW()";
  values = [category_id];
} else if (category_id) {
  sql += "WHERE category_id =?";
  values = [category_id];
} else if (news) {
  sql += "WHERE pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH AND NOW()";
}
