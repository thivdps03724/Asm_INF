
var xemsanpham = WL.Server.createSQLStatement("select * from sanpham");
function Xem() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : xemsanpham,
		parameters : []
	});
}
var xemloaisanpham = WL.Server.createSQLStatement("select * from loaisp");
function XemLoai() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : xemloaisanpham,
		parameters : []
	});
}
var LayIDsanpham = WL.Server.createSQLStatement("select * from sanpham where masp = ?");
function LayID(masp) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : LayIDsanpham,
		parameters : [masp]
	});
}
var themsanpham = WL.Server.createSQLStatement("insert into sanpham values (?, ?, ?, ?)")
function Them(masp, tensp, gia , maloai) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : themsanpham,
		parameters : [masp,tensp,gia,maloai]
	});
}
var suasanpham = WL.Server.createSQLStatement("update sanpham set tensp=?, gia=?, maloai=? where masp=?");
function Sua( tensp, gia , maloai,masp) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : suasanpham,
		parameters : [tensp,gia,maloai,masp]
	});
}
var xoasanpham = WL.Server.createSQLStatement("delete from sanpham where masp=?");
function Xoa(masp) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : xoasanpham,
		parameters : [masp]
	});
}