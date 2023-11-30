use iced::widget::{button, column, text};
use iced::{Alignment, Sandbox, Settings};

struct Counter {
    value: u32,
}

#[derive(Debug, Clone, Copy)]
enum Message {
    IncrementPressed,
    DecrementPressed,
}

impl Sandbox for Counter {
    type Message = Message;

    fn new() -> Self {
        Self { value: 0 }
    }

    fn title(&self) -> String {
        String::from("Intelli App")
    }

    fn update(&mut self, message: Self::Message) {
        match message {
            Message::IncrementPressed => {
                self.value += 1;
            }
            Message::DecrementPressed => {
                self.value -= 1;
            }
        }
    }

    fn view(&self) -> iced::Element<'_, Self::Message> {
        column![
            button("Increment +1").on_press(Message::IncrementPressed),
            text(self.value).size(50),
            button("Decrement -1").on_press(Message::DecrementPressed),
        ]
        .padding(20)
        .align_items(Alignment::Center)
        .into()
    }
}

pub fn main() -> iced::Result {
    Counter::run(Settings::default())
}
