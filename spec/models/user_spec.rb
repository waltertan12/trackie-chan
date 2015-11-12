require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { User.new(email: "jamaal.charles@imabeast.wow", 
                            username: "my acl...",
                            password: "password") }

  it "should have a password with at least 8 characters" do
    no_password = User.new(email: "asdf@asdf.com", 
                           username: "nopasswordman")
    expect(no_password.save).to be_falsey

    short_password = User.new(email: "as@as.com",
                              username: "short password",
                              password: "012345")
    expect(short_password.save).to be_falsey

    expect(user.save).to be_truthy
  end

  it "should have a valid email" do
    user.email = ""
    expect(user.save).to be_falsey

    user.email = "asdf@asdfasdf"
    expect(user.save).to be_falsey

    user.email = "asdf@asdfasdf.3"
    expect(user.save).to be_falsey

    user.email = "normal@email.websitething"
    expect(user.save).to be_truthy
  end

  it "should have a valid username" do
    user.username = ""
    expect(user.save).to be_falsey
    user.username = "a" * 256
    expect(user.save).to be_falsey
  end

  it "should have a session token after save" do
    user.save
    expect(user.session_token).to be_truthy
  end

  it "should have an image_url even if one is not explicitly given" do
    user.save
    expect(user.image_url).to be_truthy
  end
end
