Step 1 - Create routes to get and post circuits (routes.js)
```
routes.get('/circuits/filter', (req, res) => {
  res.status(200).json({ list: [] })
})
routes.post('/circuits/save', (req, res) => {
  res.status(200).json({ success: false })
})
```

Test:
```
curl --request POST \
  --url http://localhost:3001/circuits/filter \
  --header 'Content-Type: application/json' \
  --data '{
	"filters": {},
	"sorters": {
		"limit": 10,
		"skip": 0,
		"sort": "-_id"
	}
}'

curl --request POST \
  --url http://localhost:3001/circuits/save \
  --header 'Content-Type: application/json' \
  --data '{
	"circuitName": "GP da Espanha",
	"circuitCountry": "Espanha",
	"circuitCity": "Barcelona"
}'
```