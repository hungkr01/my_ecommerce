export default {
    name: 'product',
    title: 'Sản phẩm',
    type: 'document',
    //Tạo trường
    fields: [ 
        //tạo các đối tượng với các thuộc tính có sẵn như: image, name, slug, price, details
        {
            name: 'image',
            title: 'Ảnh',
            type: 'array',
            of: [{type:'image'}], //cho phép tải nhiều ảnh
            options: {             
                hotspot: true,      // đây là một thuộc tính của Sanity cho phép lựa chọn..
            }                          //..những hình ảnh nào được và không được crop
        },
        {
            name:'name',
            title: 'Tên',
            type: 'string',
        },
        {
            name: 'slug', //là một phần của url, có ý nghĩa rất lớn trong SEO
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name', //slug dựa vào tên sản phẩm bên trên
                maxLength: 100,
            }
        },
        {
            name:'price',
            title: 'Giá',
            type:'number',
        },
        {
            name:'details',
            title:'Chi tiết',
            type:'string',
        }
    ]
}