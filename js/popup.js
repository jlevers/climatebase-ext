$(document).ready(function() {
  $('#id-submit').click(function(e) {
    e.preventDefault();
    const formData = new FormData($(this).parent().get(0));

    if (formData.get('organization') && formData.get('url') && formData.get('description')) {
      // To be filled in. Currently uploading so that I can get app ID for OAuth.
    }
  });
});

