function showContent(contentId) {
    education.style.display = 'grid';
    work.style.display = 'none';
    // Toggle the visibility of grid items
    var content1 = document.getElementById('education');
    var content2 = document.getElementById('work');

    if (contentId === 'education') {
      education.style.display = 'grid';
      work.style.display = 'none';
    } else if (contentId === 'work') {
      education.style.display = 'none';
      work.style.display = 'grid';
    }
  }
