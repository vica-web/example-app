@component('mail::message')
# Name: {{ $first }} {{ $last }} <br>
# Number: {{ $phone }}<br>
# Email: {{ $email }}<br>
Message: {{ $message }} <br>
Thanks,
{{ config('app.name') }}
@endcomponent
