# build image docker
1. cd server
2. docker build -t your_username/scraper .
3. docker push your_username/scraper:latest

## How to run the application using Docker

1. docker run -p 5000:5000 -d your_username/scraper
2. curl --header "Content-Type: application/json"   --request POST   --data '{"url": "http://books.toscrape.com/index.html" , "nrOfPages":1 , "commands":[{"description": "get items metadata", "locatorCss": ".product_pod","type": "getItems"},{"description": "go to next page","locatorCss": ".next > a:nth-child(1)","type": "Click"}]}'   http://localhost:5000/api/books
