Parse.initialize("TPf2kF11biPfcF5yIrEKqw6rTRxjFRibGgSKy73A", "NOwE5UK4nwCEM1Irrl6h1iCSEh4tdR5FJe19ML1m", "iwobPKxUwKJzbK3XAiQsBcfRQNWJ678smvKqueip");

// Push notifications from parse
forge.event.messagePushed.addListener(function (msg) {
    alert(msg.alert);
});