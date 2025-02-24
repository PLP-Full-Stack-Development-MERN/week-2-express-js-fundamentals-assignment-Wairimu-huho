//products data
let products = [
    {id: 1, name: "Laptop", price: 12000, category: 'Laptops', stock: 15},
    {id: 2, name: "battery", price: 1000, category: 'Electronics', stock: 10},
    {id: 3, name: "charger", price: 500, category: 'Electronics', stock: 20}
];

// Get all products
const getAllProducts = (req, res) => {
    res.json(products);
};

// Get product by ID
const getProductById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
};

// Get products by category
const getProductsByCategory = (req, res) => {
    const categoryProducts = products.filter(
        p => p.category.toLowerCase() === req.params.category.toLowerCase()
    );
    res.json(categoryProducts);
};

// Create new product
const createProduct = (req, res) => {
    const { name, price, category, stock } = req.body;
    
    if (!name || !price) {
        return res.status(400).json({ message: 'Name and price are required' });
    }

    const newProduct = {
        id: products.length + 1,
        name,
        price: parseFloat(price),
        category: category || 'Uncategorized',
        stock: stock || 0
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
};

// Update product
const updateProduct = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    const { name, price, category, stock } = req.body;
    
    if (name) product.name = name;
    if (price) product.price = parseFloat(price);
    if (category) product.category = category;
    if (stock !== undefined) product.stock = parseInt(stock);

    res.json(product);
};

// Delete product
const deleteProduct = (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }

    products.splice(productIndex, 1);
    res.status(204).send();
};


module.exports = {
    getAllProducts,
    getProductById,
    getProductsByCategory,
    createProduct,
    updateProduct,
    deleteProduct
};