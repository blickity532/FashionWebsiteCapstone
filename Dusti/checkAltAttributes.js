const fs = require('fs');
const path = require('path');

// Directory to scan
const directory = 'c:\\Users\\blick\\Downloads\\Dusti\'s Closet\\Dusti';

// Function to check and update <img> alt attributes
function checkAndUpdateAltAttributes(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(`Error reading directory: ${err.message}`);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(dir, file);

            // Check if the file is an HTML file
            if (path.extname(file) === '.html') {
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        console.error(`Error reading file ${file}: ${err.message}`);
                        return;
                    }

                    // Regex to find <img> tags
                    const imgRegex = /<img\s+[^>]*>/g;
                    const updatedData = data.replace(imgRegex, imgTag => {
                        // Check if the <img> tag has an alt attribute
                        const altRegex = /alt="([^"]*)"/;
                        const isDecorative = imgTag.includes('class="decorative"'); // Example condition for decorative images

                        if (altRegex.test(imgTag)) {
                            const altValue = altRegex.exec(imgTag)[1];
                            if (isDecorative) {
                                // Update decorative images to have empty alt attributes
                                return imgTag.replace(altRegex, 'alt=""');
                            } else if (!altValue.trim()) {
                                // Update informative images with placeholder alt text
                                return imgTag.replace(altRegex, 'alt="Descriptive text here"');
                            }
                        } else {
                            // Add alt attribute if missing
                            return isDecorative
                                ? imgTag.replace(/<img/, '<img alt=""')
                                : imgTag.replace(/<img/, '<img alt="Descriptive text here"');
                        }
                        return imgTag;
                    });

                    // Write the updated file back
                    fs.writeFile(filePath, updatedData, 'utf8', err => {
                        if (err) {
                            console.error(`Error writing file ${file}: ${err.message}`);
                        } else {
                            console.log(`Updated <img> tags in ${file}`);
                        }
                    });
                });
            } else {
                console.log(`Skipping non-HTML file: ${file}`);
            }
        });
    });
}

// Run the function
checkAndUpdateAltAttributes(directory);