
<link rel="stylesheet" href="/css/darcula.css">
<script src="/highlight.pack.js"></script>
<script src="/libs/superagent/superagent.js"></script>

# Best Buy - API Playground

## Example Queries
Below are some example queries for the products endpoint. This is to illustrate the ways in which queries can be build via the query string. Each result is run live against the local API.

### Get product with ID of 9132294 (sku)
#### [/products/9132294](/products/9132294)

### Get all products
#### [/products](/products)

### Get all products, limit to 1 result
#### [/products?$limit=1](/products?$limit=1)

### Get all products, skip to the 25,001th result
#### [/products?$skip=25000](/products?$skip=25000)

### Get all products, sort by highest price (descending)
#### [/products?$sort[price]=-1](/products?$sort[price]=-1)

### Get all products, sort by lowest price (ascending)
#### [/products?$sort[price]=1](/products?$sort[price]=-1)

### Get all products, but only show the name and price in the result
#### [/products?$select[]=name&amp;$select[]=price](/products?$select[]=name&amp;$select[]=price)

### Get products of type HardGood
#### [/products?type=HardGood](/products?type=HardGood)

### Get products less than or equal to $1.00
#### [products?price[$lte]=1](products?price[$lte]=1)

### Get products that have 'star wars' in the name and are under $30
#### [/products?name[$like]=\*star+wars\*&amp;price[$lt]=30](/products?name[$like]=*star+wars*&amp;price[$lt]=30)

### Get products that are either $0.99 or $1.99
#### [/products?price[$in]=0.99&amp;price[$in]=1.99](/products?price[$in]=0.99&amp;price[$in]=1.99)

### Get products that have a shipping price of more than $10
#### [/products?shipping[$gt]=10](/products?shipping[$gt]=10)

### Get products that are not HardGood or Software
#### [/products?type[$nin][]=HardGood&amp;type[$nin][]=Software](/products?type[$nin][]=HardGood&amp;type[$nin][]=Software)

### Get products that are in category name "Coffee Pods"
#### [/products?category.name=Coffee Pods](/products?category.name=Coffee Pods)

### Get products that are in category ID "abcat0106004" (TV Mounts)
#### [/products?category.id=abcat0106004](/products?category.id=abcat0106004)

<script src="process.js"></script>
