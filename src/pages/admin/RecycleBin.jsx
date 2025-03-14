// import React, { useState, useEffect, memo } from 'react';
// import { MdCached, MdDeleteForever, MdOutlineEditNote } from 'react-icons/md';
// import { apiDeleteUser, apiGetAllUser, apiRemoveUser, apiRestoreUser } from '../../apis/admin';
// import { toast } from 'react-toastify';
// import { useLoading } from '../../main';
// import Tooltip from 'react-tooltip-lite';
// import useDebounce from '../../hooks/useDebounce';
// import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
// import './tooltip.css';
// import { useForm } from 'react-hook-form';
// import { InputForm, Pagination } from '../../compoments';
// import Swal from 'sweetalert2';
// import DropdownFilter from '../../compoments/Filter/RecycleFilter';
// import { apiDeleteDental, apiGetAllDental, apiRestoreDental } from '../../apis/dental';
// import { apiDeleteProduct, apiGetAllProduct, apiRestoreProduct } from '../../apis/product';

// const RecycleBin = () => {
//     const location = useLocation();
//     const { setLoading } = useLoading();

//     const [params] = useSearchParams();
//     const [counts, setCounts] = useState(0);
//     const [users, setUsers] = useState([]);
//     const [dentals, setDentals] = useState([]);
//     const [products, setProducts] = useState([]);
//     const [current, setCurrent] = useState();

//     const { register, formState: { errors }, watch } = useForm();
//     const navigate = useNavigate();
//     const queryDebounce = useDebounce(watch('q'), 800);
//     const handleFilterChange = value => {
//         if (value === "user") {
//             setCurrent("USER")
//         } else if (value === "dental") {
//             setCurrent("DENTAL")

//         } else if (value === "product") {
//             setCurrent("PRODUCT")

//         }
//     };
//     const fetchUsers = async (params) => {
//         setLoading(true);
//         const response = await apiGetAllUser({
//             ...params,
//             limit: import.meta.env.VITE_REACT_APP_LIMIT,
//             isActive: false
//         });
//         if (response.success) {

//             setLoading(false);

//             setCounts(response.counts);
//             setUsers(response.users);
//         }
//     };

//     console.log(users)
//     console.log(dentals)


//     const fetchDentals = async (params) => {
//         setLoading(true);
//         const response = await apiGetAllDental({
//             ...params,
//             limit: import.meta.env.VITE_REACT_APP_LIMIT,
//             isActive: false
//         });
//         if (response.success) {
//             setLoading(false);
//             // const dentalActive = response?.dentals.filter(dental => dental?.isActive);
//             setCounts(response.counts);
//             setDentals(response.dentals);
//         }
//     };
//     const fetchProducts = async (params) => {
//         setLoading(true);
//         const response = await apiGetAllProduct({
//             ...params,
//             limit: import.meta.env.VITE_REACT_APP_LIMIT,
//             isActive: false
//         });
//         if (response.success) {
//             setLoading(false);
//             const productActive = response?.products.filter(product => product?.isActive);
//             setCounts(response.counts);
//             setProducts(response.products);
//         }
//     };

//     useEffect(() => {
//         if (queryDebounce) {
//             navigate({
//                 pathname: location.pathname,
//                 search: createSearchParams({ q: queryDebounce }).toString()
//             });
//         } else {
//             navigate({
//                 pathname: location.pathname,
//             });
//         }
//     }, [queryDebounce, navigate, location.pathname]);

//     useEffect(() => {
//         const searchParams = Object.fromEntries([...params]);
//         if (current === "USER") {
//             fetchUsers(searchParams);
//         } else if (current === "DENTAL") {
//             fetchDentals(searchParams);
//         } else if (current === "PRODUCT") {
//             fetchProducts(searchParams);
//         }
//     }, [params, current]);

//     const handleEdit = (userId) => {
//         navigate(`/admin/update-user/${userId}`, { replace: true });
//     };

//     const handleRestore = async (uid) => {
//         const user = users.find(user => user._id === uid);
//         const dental = dentals.find(dental => dental._id === uid);
//         const product = products.find(product => product._id === uid);
//         if (current === "USER") {
//             Swal.fire({
//                 title: 'Almost...',
//                 text: `Bạn có muốn xóa ${user.fullName} ?`,
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonText: 'Restore',
//                 cancelButtonText: 'Cancel'
//             }).then(async (result) => {
//                 if (result.isConfirmed) {
//                     try {
//                         setLoading(true);

//                         const response = await apiRestoreUser(uid);
//                         if (response.success) {

//                             setTimeout(() => {
//                                 navigate(0);

//                                 setLoading(false);

//                             }, 1500);
//                             toast.success('Xóa thành công!');

//                             setUsers((prevUsers) => prevUsers.filter(user => user._id !== uid));
//                         } else {
//                             setLoading(false);

//                             toast.error(response.message || 'Lỗi');
//                         }
//                     } catch (error) {
//                         setLoading(false);

//                         console.error('Lỗi', error);
//                         toast.error('Lỗi');
//                     }
//                 }
//             });
//         } else if (current === "DENTAL") {
//             Swal.fire({
//                 title: 'Almost...',
//                 text: `Bạn có muốn xóa ${dental.dentalName} ?`,
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonText: 'Restore',
//                 cancelButtonText: 'Cancel'
//             }).then(async (result) => {
//                 if (result.isConfirmed) {
//                     try {
//                         setLoading(true);

//                         const response = await apiRestoreDental(uid);
//                         if (response.success) {

//                             setTimeout(() => {
//                                 navigate(0);

//                                 setLoading(false);

//                             }, 1500);
//                             toast.success('Xóa thành công!');

//                             setUsers((prevUsers) => prevUsers.filter(dental => dental._id !== uid));
//                         } else {
//                             setLoading(false);

//                             toast.error(response.message || 'Lỗi');
//                         }
//                     } catch (error) {
//                         setLoading(false);

//                         console.error('Lỗi', error);
//                         toast.error('Lỗi');
//                     }
//                 }
//             });
//         } else if (current === "PRODUCT") {
//             Swal.fire({
//                 title: 'Almost...',
//                 text: `Bạn có muốn khôi phục ${product.productName} ?`,
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonText: 'Khôi phục',
//                 cancelButtonText: 'Hủy'
//             }).then(async (result) => {
//                 if (result.isConfirmed) {
//                     try {
//                         setLoading(true);

//                         const response = await apiRestoreProduct(uid);
//                         if (response.success) {

//                             setTimeout(() => {
//                                 navigate(0);

//                                 setLoading(false);

//                             }, 1500);
//                             toast.success('Xóa thành công!');

//                             setUsers((prevUsers) => prevUsers.filter(product => product._id !== uid));
//                         } else {
//                             setLoading(false);

//                             toast.error(response.message || 'Lỗi');
//                         }
//                     } catch (error) {
//                         setLoading(false);

//                         console.error('Lỗi', error);
//                         toast.error('Lỗi.');
//                     }
//                 }
//             });
//         }

//     };
//     const handleDelete = async (uid) => {
//         const user = users.find(user => user._id === uid);
//         const dental = dentals.find(dental => dental._id === uid);
//         const product = products.find(product => product._id === uid);
//         if (current === "USER") {
//             Swal.fire({
//                 title: 'Almost...',
//                 text: `Bạn có muốn xóa ${user.fullName} ?`,
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonText: 'Xóa',
//                 cancelButtonText: 'Hủy'
//             }).then(async (result) => {
//                 if (result.isConfirmed) {
//                     try {
//                         setLoading(true);

//                         const response = await apiDeleteUser(uid);
//                         if (response.success) {

//                             setTimeout(() => {
//                                 navigate(0);

//                                 setLoading(false);

//                             }, 1500);
//                             toast.success('Xóa thành công!');

//                             setUsers((prevUsers) => prevUsers.filter(user => user._id !== uid));
//                         } else {
//                             setLoading(false);

//                             toast.error(response.message || 'Lỗi');
//                         }
//                     } catch (error) {
//                         setLoading(false);

//                         console.error('Lỗi', error);
//                         toast.error('Lỗi');
//                     }
//                 }
//             });
//         } else if (current === "DENTAL") {
//             Swal.fire({
//                 title: 'Almost...',
//                 text: `Bạn có muốn xóa ${dental.dentalName} ?`,
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonText: 'Xóa',
//                 cancelButtonText: 'Hủy'
//             }).then(async (result) => {
//                 if (result.isConfirmed) {
//                     try {
//                         setLoading(true);

//                         const response = await apiDeleteDental(uid);
//                         if (response.success) {

//                             setTimeout(() => {
//                                 navigate(0);

//                                 setLoading(false);

//                             }, 1500);
//                             toast.success('Xóa thành công!');

//                             setUsers((prevUsers) => prevUsers.filter(dental => dental._id !== uid));
//                         } else {
//                             setLoading(false);

//                             toast.error(response.message || 'Lỗi');
//                         }
//                     } catch (error) {
//                         setLoading(false);

//                         console.error('Lỗi:', error);
//                         toast.error('Lỗi.');
//                     }
//                 }
//             });
//         } else if (current === "PRODUCT") {
//             Swal.fire({
//                 title: 'Almost...',
//                 text: `Bạn có muốn xóa ${product.productName} ?`,
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonText: 'Xóa',
//                 cancelButtonText: 'Hủy'
//             }).then(async (result) => {
//                 if (result.isConfirmed) {
//                     try {
//                         setLoading(true);

//                         const response = await apiDeleteProduct(uid);
//                         if (response.success) {

//                             setTimeout(() => {
//                                 navigate(0);

//                                 setLoading(false);

//                             }, 1500);
//                             toast.success('Xóa thành công!');

//                             setUsers((prevUsers) => prevUsers.filter(product => product._id !== uid));
//                         } else {
//                             setLoading(false);

//                             toast.error(response.message || 'Lỗi');
//                         }
//                     } catch (error) {
//                         setLoading(false);

//                         console.error('Lỗi:', error);
//                         toast.error('Lỗi.');
//                     }
//                 }
//             });
//         }

//     };

//     return (

//         <div className="container">
//             <div className="row my-4">
//                 <div className="col">
//                     <div className="table-responsive">
//                         <h2 style={{
//                             textAlign: 'start', fontFamily: 'system-ui', color: '#333', marginTop: '20px', marginBottom: '20px', fontSize: '50px', fontWeight: 600, borderBottom: '2px solid #ccc',  // Adds a 2px solid border with a light gray color
//                             paddingBottom: '10px'
//                         }}>Thùng rác</h2>
//                         <DropdownFilter onChange={handleFilterChange} />{" "}
//                         {/* Sử dụng DropdownFilter */}
//                         <div className='flex justify-end '>

//                             <form className='w-[100%] md:w-[60%] lg:w-[50%]'>
//                                 <InputForm
//                                     id='q'
//                                     register={register}
//                                     errors={errors}
//                                     fullWidth
//                                     placeholder='Tìm kiếm theo Tên sản phẩm, Họ tên, Mã số,...'
//                                 />
//                             </form>
//                         </div>

//                         <table className="table table-striped my-3">
//                             <thead className="table-dark text-center">
//                                 {current === "USER" ? (<tr>
//                                     <th className="text-center">STT</th>
//                                     <th className="text-center">Tên Sản Phẩm</th>
//                                     <th className="text-center">Tên Khách Hàng</th>
//                                     <th className="text-center">Mã Sản Phẩm</th>
//                                     <th className="text-center">Tên Nha Khoa</th>
//                                     <th className="text-center">Tên Bác Sĩ</th>
//                                     <th className="text-center">Số Lượng</th>
//                                     <th className="text-center">Hết hạn</th>
//                                     <th className="text-center">Hành động</th>

//                                 </tr>) : current === "DENTAL" ? (<tr>
//                                     <th className="text-center">STT</th>
//                                     <th className="text-center">Tên Nha Khoa</th>
//                                     <th className="text-center">Hành động</th>
//                                 </tr>) : (<tr>
//                                     <th className="text-center">STT</th>
//                                     <th className="text-center">Tên Sản Phẩm</th>
//                                     <th className="text-center">Hành động</th>
//                                 </tr>)}

//                             </thead>
//                             <tbody>
//                                 {current === "USER" ? (
//                                     users.length > 0 ? (
//                                         users.map((user, index) => (
//                                             <tr key={user._id} className="align-middle text-center">
//                                                 <td>{((+params.get('page') > 1
//                                                     ? +params.get('page') - 1
//                                                     : 0) * import.meta.env.VITE_REACT_APP_LIMIT) + index + 1}</td>
//                                                 <td>{user.productName}</td>
//                                                 <td>{user.fullName}</td>
//                                                 <td>{user.numbCode}</td>
//                                                 <td>{user.dentalName}</td>
//                                                 <td>{user.doctorName}</td>
//                                                 <td>{user.quantity}</td>
//                                                 <td>{new Date(user.expiryDate).toLocaleDateString()}</td>
//                                                 {/* <td>{new Date(user.createdAt).toLocaleDateString()}</td>
//                                             <td>{new Date(user.updatedAt).toLocaleDateString()}</td> */}
//                                                 <td>

//                                                     <Tooltip content="Khôi phục" direction="up-right" tagName="span">
//                                                         <button
//                                                             onClick={() => handleRestore(user._id)}
//                                                             className="btn btn-sm btn-primary me-2"
//                                                         >
//                                                             <MdCached />
//                                                         </button>
//                                                     </Tooltip>

//                                                     <Tooltip content="Xóa" direction="up-right" tagName="span">
//                                                         <button
//                                                             onClick={() => handleDelete(user._id)}
//                                                             className="btn btn-sm btn-danger"
//                                                         >
//                                                             <MdDeleteForever />
//                                                         </button>
//                                                     </Tooltip>
//                                                 </td>
//                                             </tr>
//                                         ))
//                                     ) : (
//                                         <tr>
//                                             <td colSpan="11" className="text-center text-secondary mt-5">
//                                                 No users found in the database
//                                             </td>
//                                         </tr>
//                                     )
//                                 ) : current === "DENTAL" ? (dentals && dentals.length > 0 ? (
//                                     dentals.map((dental, index) => (
//                                         <tr key={dental._id} className="align-middle text-center">
//                                             <td>{((+params.get('page') > 1
//                                                 ? +params.get('page') - 1
//                                                 : 0) * import.meta.env.VITE_REACT_APP_LIMIT) + index + 1}</td>
//                                             {/* <td>{dental.productName}</td>
//                                             <td>{dental.fullName}</td>
//                                             <td>{dental.numbCode}</td> */}
//                                             <td>{dental.dentalName}</td>
//                                             {/* <td>{dental.dentalName}</td> */}
//                                             {/* <td>{dental.quantity}</td> */}
//                                             {/* <td>{new Date(dental.expiryDate).toLocaleDateString()}</td> */}
//                                             <td>
//                                                 <Tooltip content="Edit User" direction="up-right" tagName="span">
//                                                     <a
//                                                         onClick={() => handleRestore(dental._id)}
//                                                         className="btn btn-sm btn-primary me-2"
//                                                     >
//                                                         <MdCached />
//                                                     </a>
//                                                 </Tooltip>

//                                                 <Tooltip content="Delete User" direction="up-right" tagName="span">
//                                                     <button
//                                                         onClick={() => handleDelete(dental._id)}
//                                                         className="btn btn-sm btn-danger"
//                                                     >
//                                                         <MdDeleteForever />
//                                                     </button>
//                                                 </Tooltip>
//                                             </td>
//                                         </tr>
//                                     ))
//                                 ) : (
//                                     <tr>
//                                         <td colSpan="11" className="text-center text-secondary mt-5">
//                                             No dentals found in the database
//                                         </td>
//                                     </tr>
//                                 )) : (products && products.length > 0 ? (
//                                     products.map((product, index) => (
//                                         <tr key={product._id} className="align-middle text-center">
//                                             <td>{((+params.get('page') > 1
//                                                 ? +params.get('page') - 1
//                                                 : 0) * import.meta.env.VITE_REACT_APP_LIMIT) + index + 1}</td>
//                                             {/* <td>{product.productName}</td>
//                                             <td>{product.fullName}</td>
//                                             <td>{product.numbCode}</td> */}
//                                             <td>{product.productName}</td>
//                                             <td>
//                                                 <Tooltip content="Edit User" direction="up-right" tagName="span">
//                                                     <a
//                                                         onClick={() => handleRestore(product._id)}
//                                                         className="btn btn-sm btn-primary me-2"
//                                                     >
//                                                         <MdCached />
//                                                     </a>
//                                                 </Tooltip>

//                                                 <Tooltip content="Delete User" direction="up-right" tagName="span">
//                                                     <button
//                                                         onClick={() => handleDelete(product._id)}
//                                                         className="btn btn-sm btn-danger"
//                                                     >
//                                                         <MdDeleteForever />
//                                                     </button>
//                                                 </Tooltip>
//                                             </td>
//                                         </tr>
//                                     ))
//                                 ) : (
//                                     <tr>
//                                         <td colSpan="11" className="text-center text-secondary mt-5">
//                                             No products found in the database
//                                         </td>
//                                     </tr>
//                                 ))}

//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>

//             <div className='flex justify-end items-center'>
//                 <Pagination totalCount={counts} />

//             </div>
//         </div>
//     );
// };

// export default memo(RecycleBin);
