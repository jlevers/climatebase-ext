$(document).ready(function() {
  $('#id-submit').click(function(e) {
    e.preventDefault();
    const formData = new FormData($(this).parent().get(0));

    if (formData.get('organization') && formData.get('url') && formData.get('description')) {
      // To be filled in. Currently uploading so that I can get app ID for OAuth.
    }
  });

  $('#logo-input-wrapper, #upload-button').click(function() {
    $('#id-logo').click();
  });

  $('#id-logo').change(function() {
    const fname = this.value;
    let formText = 'Please upload a logo';

    $logoInputWrapper = $('#logo-input-wrapper');

    if (fname.length > 0) {
      formText = fname.substring(fname.lastIndexOf('\\') + 1);
      $logoInputWrapper.addClass('file-added');
    } else {
      $logoInputWrapper.removeClass('file-added');
    }

    $logoInputWrapper.text(formText);
  });

  $('#id-impact_area').select2({
    placeholder: 'Click to select',
    multiple: true
  });

  $('#id-industry').select2({
    placeholder: 'Click to select',
    multiple: true
  });
  
  $('#id-org_type').select2({
    placeholder: 'Click to select',
    multiple: true
  });
});

