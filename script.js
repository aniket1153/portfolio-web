document.getElementById('downloadButton').addEventListener('click', function() {
    // Replace 'your-file.pdf' with the path to your PDF file
    const filePath = './resume.pdf';
    
    const a = document.createElement('a');
    a.href = filePath;
    a.download = filePath.substring(filePath.lastIndexOf('/') + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});