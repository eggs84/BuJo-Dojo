$(document).ready(function () {
  function updateItem(event) {
    event.preventDefault();
    var date = $('#datepicker').val();
    if (date === '') {
      date = $('#datepicker').attr('placeholder');
    }
    var data = {
      id: $(this).data('id'),
      item: $('#edit-text').val().trim(),
      setDate: date,
      completed: $('#completed').val()
    };
    $.ajax({
      method: 'PUT',
      url: '/api/tasks',
      data: data,
      success: function () {
        document.location = '/';
      }
    });
  }

  $(document).on('click', '.update-item', updateItem);
});
