# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard :haml, run_at_start: true, input: '_layouts', output: '_layouts' do
end

guard :haml, run_at_start: true, input: 'views', output: '.' do
end

guard :compass, configuration_file: 'assets/config.rb', project_path: 'assets',
      compile_on_start: true do
end

guard 'coffeescript', input: 'assets/js'