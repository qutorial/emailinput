build:
	ng build --base-href /email-input/

deploy: build
	rsync -avux ./dist/emailinput/ pancake:/var/www/email-input/

