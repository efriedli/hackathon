# ZeroInbox

Leveraging Gemini to make email awesome again

## How to

- ZeroInbox.ipynb describes the backend logic
	- auth to google
	- fetch emails from Gmail
	- transform the email list into a JSON file following the JSON-schema described "emailParseStructure.json" thanks to Gemini and Vertex
	- generate the HTML to be displayed thanks to template.html and jinja2
	
- UI folder
	- the html, css and js files used to display the extracted content
	
- assets folder
	- skilling_emails_light.txt: a data set containing json representation of emails
	- content.json: a JSON file representing the extracted data